import { ShoppingCartService } from './../../services/shopping-cart-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.scss']
})
export class NavbarMainComponent implements OnInit, OnDestroy {
  handler:Subscription[] = [];  
  itemNumber: number = 0;
  constructor(private shoppingCartService: ShoppingCartService) {
      let subCart = this.shoppingCartService.getShoppingCart().subscribe(
         data => {
            if(data && data.items && data.items.length > 0){
                this.itemNumber = data.items.length;
            } else {
                this.itemNumber = 0;
            }
         }
      );
      this.handler.push(subCart);
   }

  ngOnInit() {
     let cart = this.shoppingCartService.retrieve();
     if(cart && cart.items && cart.items.length > 0){
        this.itemNumber = cart.items.length;
     } else {
        this.itemNumber = 0;
     }
  }

  ngOnDestroy(){
      this.handler.forEach(sub => sub.unsubscribe());
  }

}
