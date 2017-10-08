import { ShoppingCartService } from './../../services/shopping-cart-service';
import { ShoppingCartPageComponent } from './../shopping-cart-page/shopping-cart-page.component';
import { OrderQuantityComponent } from './../../share/order-components/order-quantity/order-quantity.component';
import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit, OnDestroy {
  handler:Subscription[] = [];
  product: Product;

  orderQuanity:number = 0;

  constructor(private route: ActivatedRoute, private productService: ProductService, private shoppingCartService: ShoppingCartService) {
      this.product = new Product();
   }

  ngOnInit() {
      let subParam = this.route.params.subscribe(
         params =>{
            let title = params["id"];
            let subProd = this.productService.get(title).subscribe(
              data =>{
                console.log("data",data);
              
                 let products = data.filter(p => p.title === title);
                 if(products && products.length > 0){
                   this.product = products[0];
                 }
              }
            );
            this.handler.push(subProd);
         }
      );
      this.handler.push(subParam);
  }

  ngOnDestroy(){
    this.handler.forEach(sub => sub.unsubscribe());
  }


  orderQuantityChange($event){
     this.orderQuanity = $event;
  }

  addToCart(){
    this.shoppingCartService.addItem(this.product, this.orderQuanity);
  }
}
