import { ShoppingCartService } from './../../services/shopping-cart-service';
import { ShoppingCart } from './../../models/shopping-cart.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shopping-cart-page',
  templateUrl: './shopping-cart-page.component.html',
  styleUrls: ['./shopping-cart-page.component.scss']
})
export class ShoppingCartPageComponent implements OnInit, OnDestroy {
  handler:Subscription[] = [];
  cart: ShoppingCart = new ShoppingCart();
  constructor(private shoppingCartService: ShoppingCartService) { 
    let subShopping = this.shoppingCartService.getShoppingCart().subscribe(
      data => {
         console.log("data=",data);
         this.cart = data;
      }
    );
    this.handler.push(subShopping);
  }

  ngOnInit() {
      this.cart = this.shoppingCartService.retrieve();
  }

  ngOnDestroy(){
    this.handler.forEach(sub => sub.unsubscribe());
  }

  onRemoveItemEvent($event){
     this.shoppingCartService.removeItem($event);
  }

  onUpdateItemEvent($event){
     console.log("item=",$event);
     this.shoppingCartService.updateItem($event);
  }
}
