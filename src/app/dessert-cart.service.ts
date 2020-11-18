import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dessert } from './dessert-list/Dessert';

@Injectable({
  providedIn: 'root'
})
export class DessertCartService {

  // _cartList is the private version of cartList, in which i'll be working on in this class
  private _cartList: Dessert[] = [];

  // cartList is not vinculated to _cartList variable, it's receiving a subject's type variable that (in this case) is _cartList
  cartList: BehaviorSubject<Dessert[]> = new BehaviorSubject(this._cartList);

  constructor() { }

  addToCart(dessert: Dessert) {
    let item : Dessert = this._cartList.find((v1) => v1.name == dessert.name);
    if(!item){
      this._cartList.push({... dessert});
    }
    else{
      item.quantity += dessert.quantity;
    }
    // here i update cartList to a new value, so i use the 'next' method and insert _cartList
    this.cartList.next(this._cartList);
  }
}
