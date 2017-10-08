import { AppService } from './app-service';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductService {
    private products:Observable<Product[]>;

    constructor(private appService: AppService){
        this.products = this.appService.getJson("../assets/json/products.json");
    }
    
    all():Observable<Product[]>{
        //return this.appService.getJson("../assets/json/products.json");
        return this.products; 
    }

    get(titleVal:string){
        return this.products;
    }

}