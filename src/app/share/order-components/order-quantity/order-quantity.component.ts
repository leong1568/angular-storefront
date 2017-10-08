import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'order-quantity',
  templateUrl: './order-quantity.component.html',
  styleUrls: ['./order-quantity.component.scss']
})
export class OrderQuantityComponent implements OnInit {
  @Input()
  quantity:number = 1;

  @Output()
  modelChange:EventEmitter<number> = new EventEmitter<number>()
  
  constructor() {
     
   }

  ngOnInit() {
    this.modelChange.next(this.quantity);
  }

  increase(){
     this.quantity = this.quantity + 1;
     this.modelChange.next(this.quantity);
  }

  decrease(){
     this.quantity = this.quantity - 1;
     if(this.quantity && this.quantity < 0){
        this.quantity = 0;
     }
     this.modelChange.next(this.quantity);
  }
}
