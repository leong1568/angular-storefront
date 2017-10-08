import { ShoppingCartService } from './../../services/shopping-cart-service';
import { Product } from './../../models/product.model';
import { AppService } from './../../services/app-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit, OnDestroy {
  handler:Subscription[] = [];
  products:Product[] = [];
  
  constructor(private route:ActivatedRoute, 
              private router: Router, 
              private appService: AppService, 
              private productService: ProductService,
              private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {
    let prodSub = this.productService.all().subscribe(
       data=> {
         //console.log(data);
         this.products = [];  
         for(let idx in data ){
            this.products.push(data[idx]);
         }
       }
    );
    this.handler.push(prodSub);
  }

  ngOnDestroy(){
     this.handler.forEach(sub => sub.unsubscribe());
  }

  showProductDetails($event){
     //this.productService.updateProduct($event);
     if($event && $event.title){
      this.router.navigate(['/home/plates',$event.title],{relativeTo: this.route})
     }
  }

  addToCart($event){
      this.shoppingCartService.addItem($event, 1);
  }

}
