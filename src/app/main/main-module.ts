import { StorageService, LocalStorageService } from './../services/storage.service';
import { ProductService } from './../services/product-service';
import { NavbarMainComponent } from './navbar-main/navbar-main.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { AppService } from './../services/app-service';
import { ShareModule } from './../share/share.module';
import { NgModule } from '@angular/core';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { ShoppingCartPageComponent } from './shopping-cart-page/shopping-cart-page.component';
import { ShoppingCartService } from '../services/shopping-cart-service';

const MAIN_COMPONENTS=[
    NavbarMainComponent,
    CategoryPageComponent,
    ProductDetailsPageComponent,
    ShoppingCartPageComponent
];

@NgModule({
    declarations:[
        ...MAIN_COMPONENTS
    ],
    imports:[
        ShareModule
    ],
    exports:[
        ...MAIN_COMPONENTS
    ],
    providers:[
        AppService,
        ProductService,
        ShoppingCartService,
        {provide:StorageService, useClass: LocalStorageService}
    ]
})
export class MainModule {
}
