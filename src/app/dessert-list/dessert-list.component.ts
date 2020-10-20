import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dessert-list',
  templateUrl: './dessert-list.component.html',
  styleUrls: ['./dessert-list.component.scss']
})
export class DessertListComponent implements OnInit {

  dessert = {
    "name": "Brownie Tradicional",
    "price": "90",
    "price2": "160",
    "stock": "10",
    "image": "assets/images/1.jpeg",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
