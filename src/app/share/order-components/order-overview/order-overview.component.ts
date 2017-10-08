import { ShoppingCart } from './../../../models/shopping-cart.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {

  @Input()
  cart:ShoppingCart;
  constructor() { }

  ngOnInit() {
  }

}
