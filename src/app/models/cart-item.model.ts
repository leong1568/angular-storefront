import { Product } from "./product.model";

export class CartItem {
    product:Product;
    quantity:number = 0;
    subTotal:number = 0; 
}