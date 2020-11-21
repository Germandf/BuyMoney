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
      "name": "Torta Brownie con Arandanos",
      "price": 180,
      "price2": 340,
      "stock": 0,
      "image": "assets/images/brownie-con-arandanos.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Brownie con Nueces",
      "price": 180,
      "price2": 340,
      "stock": 20,
      "image": "assets/images/brownie-con-nueces.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
    {
      "name": "Brownie Tradicional",
      "price": 90,
      "price2": 160,
      "stock": 10,
      "image": "assets/images/brownie-tradicional.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Budín de Banana",
      "price": 180,
      "price2": 300,
      "stock": 13,
      "image": "assets/images/budin-de-banana.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Cheesecake con salsa de frutos rojos",
      "price": 220,
      "price2": 420,
      "stock": 0,
      "image": "assets/images/cheesecake-salsa-frutos-rojos.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
    {
      "name": "Cookies",
      "price": 150,
      "price2": 280,
      "stock": 26,
      "image": "assets/images/cookies.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Mini Lemon Pie",
      "price": 130,
      "price2": 250,
      "stock": 0,
      "image": "assets/images/mini-lemon-pie.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Mini Tartaleta de Frutillas",
      "price": 130,
      "price2": 250,
      "stock": 19,
      "image": "assets/images/mini-tartaleta-de-frutilla.jpeg",
      "hasDiscount": false,
      "quantity": 6,
    },
    {
      "name": "Pavlova",
      "price": 100,
      "price2": 180,
      "stock": 25,
      "image": "assets/images/pavlova.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
    {
      "name": "Rogel",
      "price": 100,
      "price2": 180,
      "stock": 16,
      "image": "assets/images/rogel.jpeg",
      "hasDiscount": true,
      "quantity": 0,
    },
    {
      "name": "Torta Tofi",
      "price": 130,
      "price2": 250,
      "stock": 14,
      "image": "assets/images/torta-tofi.jpeg",
      "hasDiscount": false,
      "quantity": 0,
    },
    {
      "name": "Triangulitos de Queso",
      "price": 150,
      "price2": 280,
      "stock": 0,
      "image": "assets/images/triangulitos-de-queso.jpeg",
      "hasDiscount": false,
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
