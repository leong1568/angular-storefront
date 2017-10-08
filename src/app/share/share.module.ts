
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { ProductGalleryInfoComponent } from './product-components/product-gallery-info/product-gallery-info.component';
import { ProductImageComponent } from './product-components/product-image/product-image.component';
import { ProductInformationComponent } from './product-components/product-information/product-information.component';
import { CartItemComponent } from './cart-components/cart-item/cart-item.component';
import { OrderQuantityComponent } from './order-components/order-quantity/order-quantity.component';
import { AudPipe } from './utils/aud-pipe';
import { OrderOverviewComponent } from './order-components/order-overview/order-overview.component';


const SHARE_COMPONENTS = [
    ProductGalleryInfoComponent,
    ProductImageComponent,
    ProductInformationComponent,
    CartItemComponent,
    OrderQuantityComponent,
    OrderOverviewComponent,
    AudPipe
]

@NgModule({
    declarations:[
        ...SHARE_COMPONENTS,
        OrderOverviewComponent,      
    ],
    imports:[
        FormsModule,
        CommonModule
    ],
    exports: [
        ...SHARE_COMPONENTS,
        FormsModule,
        CommonModule
    ],
    providers:[]
})
export class ShareModule {
}
