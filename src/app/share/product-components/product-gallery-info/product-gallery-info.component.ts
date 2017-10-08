import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'product-gallery-info',
  templateUrl: './product-gallery-info.component.html',
  styleUrls: ['./product-gallery-info.component.scss']
})
export class ProductGalleryInfoComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  private onClickEvent = new EventEmitter<Product>();

  @Output()
  private onAddToCartEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
     this.onClickEvent.next(this.product);
  }

  addToCart(){
     this.onAddToCartEvent.next(this.product);
  }
}
