import { Component, OnInit } from '@angular/core';
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
      "image": "assets/images/1.jpeg",
      "hasDiscount": false,
    },
    {
      "name": "Mini Torta Brownie con nueces",
      "price": 180,
      "price2": 340,
      "stock": 20,
      "image": "assets/images/2.jpeg",
      "hasDiscount": true,
    },
    {
      "name": "Mini Lemon Pie",
      "price": 130,
      "price2": 250,
      "stock": 15,
      "image": "assets/images/3.jpeg",
      "hasDiscount": false,
    },
    {
      "name": "Tarta Tofi",
      "price": 130,
      "price2": 250,
      "stock": 0,
      "image": "assets/images/4.jpeg",
      "hasDiscount": false,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
