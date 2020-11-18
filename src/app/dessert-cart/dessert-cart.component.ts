import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DessertCartService } from '../dessert-cart.service';
import { Dessert } from '../dessert-list/Dessert';

@Component({
  selector: 'app-dessert-cart',
  templateUrl: './dessert-cart.component.html',
  styleUrls: ['./dessert-cart.component.scss']
})
export class DessertCartComponent implements OnInit {

  cartList$: Observable<Dessert[]>;

  constructor(private cart : DessertCartService) { 
    this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
