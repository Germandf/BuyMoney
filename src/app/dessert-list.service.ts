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
      "image": "assets/images/1.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Mini Torta Brownie con Nueces",
      "price": 180,
      "price2": 340,
      "stock": 20,
      "image": "assets/images/2.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
    {
      "name": "Mini Lemon Pie",
      "price": 130,
      "price2": 250,
      "stock": 0,
      "image": "assets/images/3.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Tarta Tofi",
      "price": 130,
      "price2": 250,
      "stock": 14,
      "image": "assets/images/4.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Cookies",
      "price": 150,
      "price2": 280,
      "stock": 26,
      "image": "assets/images/5.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Postre Oreo",
      "price": 200,
      "price2": 380,
      "stock": 8,
      "image": "assets/images/6.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
    {
      "name": "Torta Brownie con Arandanos",
      "price": 180,
      "price2": 340,
      "stock": 0,
      "image": "assets/images/7.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Mini Tartaleta de Frutillas",
      "price": 130,
      "price2": 250,
      "stock": 19,
      "image": "assets/images/8.jpeg",
      "hasDiscount": false,
      "quantity": 6,
    },
    {
      "name": "Pavlova",
      "price": 100,
      "price2": 180,
      "stock": 25,
      "image": "assets/images/9.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
    {
      "name": "Triangulitos de Queso",
      "price": 150,
      "price2": 280,
      "stock": 0,
      "image": "assets/images/10.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Budín de Banana",
      "price": 180,
      "price2": 300,
      "stock": 13,
      "image": "assets/images/11.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Rogel",
      "price": 100,
      "price2": 180,
      "stock": 16,
      "image": "assets/images/12.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
    {
      "name": "Cheesecake",
      "price": 220,
      "price2": 420,
      "stock": 0,
      "image": "assets/images/13.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Tartaleta de Durazno",
      "price": 130,
      "price2": 250,
      "stock": 12,
      "image": "assets/images/14.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
  ];

  // cartList is not vinculated to _cartList variable, it's receiving a subject's type variable that (in this case) is _cartList
  dessertList: BehaviorSubject<Dessert[]> = new BehaviorSubject(this._dessertList);
  
  constructor() { }

  ngOnInit(): void {
  }

  restoreQuantity(dessert: Dessert){
    let item : Dessert = this._dessertList.find((v1) => v1.name == dessert.name);
    if(item){
      item.stock += dessert.quantity;
    }
    else{
      alert("Hubo un error");
    }
    this.dessertList.next(this._dessertList);
  }

}
