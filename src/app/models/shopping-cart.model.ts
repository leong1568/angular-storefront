import { CartItem } from "./cart-item.model";


export class ShoppingCart {
    items:CartItem[] = new Array<CartItem>();
    orderTotal: number = 0;

    updateFrom(shoppingCart:ShoppingCart){
        this.items = shoppingCart.items;
        this.orderTotal = shoppingCart.orderTotal; 
    }
}