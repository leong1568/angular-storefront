import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.scss']
})
export class ProductInformationComponent implements OnInit {

  @Input()
  product:Product;

  constructor() { 
     this.product = new Product();
  }

  ngOnInit() {
  }

}
