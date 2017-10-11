import { Routes } from "@angular/router";
import { CategoryPageComponent } from "./category-page/category-page.component";
import { ProductDetailsPageComponent } from "./product-details-page/product-details-page.component";
import { ShoppingCartPageComponent } from "./shopping-cart-page/shopping-cart-page.component";

export const MAIN_ROUTES: Routes =[
    {path:'home',redirectTo: 'home/plates', pathMatch:'full'},
    {path:'home/plates', component: CategoryPageComponent},
    {path:'home/plates/:id',component: ProductDetailsPageComponent},
    {path:'cart',component: ShoppingCartPageComponent},
]