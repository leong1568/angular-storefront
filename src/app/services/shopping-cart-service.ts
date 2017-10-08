import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { ShoppingCart } from './../models/shopping-cart.model';
import { CartItem } from './../models/cart-item.model';
import { Observable, Subject } from 'rxjs/Rx';
import { StorageService } from "./storage.service";
import { Product } from '../models/product.model';


const CART_KEY="shopping_cart";

@Injectable()
export class ShoppingCartService {

    private storage: Storage;

    private subject:BehaviorSubject<ShoppingCart> = new BehaviorSubject<ShoppingCart>(null);

    updateShoppingCart(cart: ShoppingCart){
        this.subject.next(cart);
    }

    getShoppingCart():Observable<ShoppingCart>{
        return this.subject.asObservable();
    }

    constructor(private storageService:StorageService){
        this.storage = storageService.get();
    }
  
    addItem(product:Product, quantity: number):void {
        let cart = this.retrieve();
        let item = cart.items.find(item=>item.product.title === product.title);
        if(item === undefined){
            item = new CartItem();
            item.product = product;
            cart.items.push(item);
        }  
        item.quantity += quantity; 
        item.subTotal = item.product.price*item.quantity;
        this.calculateCart(cart);
        this.save(cart);
        this.updateShoppingCart(cart);
    }

    removeItem(item:CartItem){
        let cart = this.retrieve();
        let newItems:CartItem[] = [];
        cart.items.filter(it => it.product.title !== item.product.title).forEach(it => newItems.push(it));
        cart.items = newItems;
        this.calculateCart(cart);
        this.save(cart);
        this.updateShoppingCart(cart);
    }

    updateItem(item:CartItem){
       let cart = this.retrieve(); 
       let index = cart.items.map(it => it.product.title).indexOf(item.product.title);
       if(index > -1){
            cart.items[index] = item;
            this.calculateCart(cart);
            this.save(cart);
            this.updateShoppingCart(cart); 
       }
    }

    emptyCart(){
        let cart = this.retrieve();
        cart.items=[];
        cart.orderTotal=0;
        this.save(cart);
    }

    public retrieve():ShoppingCart {
        let cart = new ShoppingCart();
        let storedCart = this.storageService.get().getItem(CART_KEY);
        if(storedCart){
            cart.updateFrom(JSON.parse(storedCart))
        }
        return cart;
    }

    private calculateCart(cart: ShoppingCart){
        cart.orderTotal = cart.items.map(item=>item.quantity*item.product.price).reduce((prev,current)=>prev+current,0);
    }

    private save(cart:ShoppingCart){
        this.storage.setItem(CART_KEY,JSON.stringify(cart));
    }
}