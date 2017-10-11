import { CategoryPageComponent } from './main/category-page/category-page.component';

import {Routes} from "@angular/router";
import { ProductDetailsPageComponent } from './main/product-details-page/product-details-page.component';
import { ShoppingCartPageComponent } from './main/shopping-cart-page/shopping-cart-page.component';

export const ROUTES: Routes = [
    {path:'*',redirectTo: 'home', pathMatch:'full'},
];
  