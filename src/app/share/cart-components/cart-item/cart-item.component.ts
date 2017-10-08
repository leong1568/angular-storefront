import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from '../../../models/cart-item.model';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem:CartItem;

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

  orderQuantityChange($event){
     this.cartItem.quantity = $event;
     this.updateItemEvent.next(this.cartItem); 
  }
}
