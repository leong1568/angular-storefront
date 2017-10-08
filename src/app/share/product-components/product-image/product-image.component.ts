import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.scss']
})
export class ProductImageComponent implements OnInit {

  @Input()
  product: Product;
  constructor() { }

  ngOnInit() {
  }

}
