import { ShoppingCart } from './../../../models/shopping-cart.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../../models/cart-item.model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  cart:ShoppingCart;

  @Output()
  removeItemEvent:EventEmitter<CartItem>=new EventEmitter<CartItem>();

  @Output()
  updateItemEvent:EventEmitter<CartItem>=new EventEmitter<CartItem>(); 

  constructor() { }

  ngOnInit() {
  }

  removeItem(item){
     this.removeItemEvent.next(item);
  }

  orderQuantityChange(cartItem:CartItem, $event){
     cartItem.quantity = $event;
     if(cartItem.quantity > 0){
        this.updateItemEvent.next(cartItem); 
     } else {
        this.removeItemEvent.next(cartItem);
     }
    
  }
}
