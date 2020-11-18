import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Dessert } from './dessert-list/Dessert';

@Injectable({
  providedIn: 'root'
})
export class DessertListService {

  // _cartList is the private version of cartList, in which i'll be working on in this class
  private _dessertList: Dessert[] = [
    {
      "name": "Brownie Tradicional",
      "price": 90,
      "price2": 160,
      "stock": 10,
      "image": "assets/images/dessert-images/1.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Mini Torta Brownie con nueces",
      "price": 180,
      "price2": 340,
      "stock": 20,
      "image": "assets/images/dessert-images/2.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
    {
      "name": "Mini Lemon Pie",
      "price": 130,
      "price2": 250,
      "stock": 15,
      "image": "assets/images/dessert-images/3.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Tarta Tofi",
      "price": 130,
      "price2": 250,
      "stock": 0,
      "image": "assets/images/dessert-images/4.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
  ];

  // cartList is not vinculated to _cartList variable, it's receiving a subject's type variable that (in this case) is _cartList
  dessertList: BehaviorSubject<Dessert[]> = new BehaviorSubject(this._dessertList);
  
  constructor() { }

  ngOnInit(): void {
  }

}
