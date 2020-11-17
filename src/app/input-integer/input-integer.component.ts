import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dessert } from '../dessert-list/Dessert';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { }

  @Input()
  quantity : number;
  @Input()
  max : number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void {
    if(this.max > this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else{
      this.maxReached.emit("Se alcanzó el máximo permitido");
    }
  }

  downQuantity(): void {
    if(this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(): void{
    if(this.quantity > this.max){
      this.quantity = this.max;
    }
    else if(this.quantity < 0){
      this.quantity = 0;
    }
    this.quantityChange.emit(this.quantity);
  }
}
