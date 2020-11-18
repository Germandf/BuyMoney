import { Component, OnInit } from '@angular/core';
import { DessertCartService } from '../dessert-cart.service';
import { Dessert } from './Dessert';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.scss']
})
export class DessertListComponent implements OnInit {

  desserts : Dessert[] = [
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
  
  constructor(private cart : DessertCartService) { }

  ngOnInit(): void {
  }

  addToCart(dessert: Dessert): void{
    this.cart.addToCart(dessert);
    dessert.stock -= dessert.quantity;
    dessert.quantity = 0;
  }

  maxReached(message : string){
    alert(message);
  }

}
