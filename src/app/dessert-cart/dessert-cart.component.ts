import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DessertCartService } from '../dessert-cart.service';
import { DessertListService } from '../dessert-list.service';
import { Dessert } from '../dessert-list/Dessert';

@Component({
  selector: 'app-dessert-cart',
  templateUrl: './dessert-cart.component.html',
  styleUrls: ['./dessert-cart.component.scss']
})
export class DessertCartComponent implements OnInit {

  cartList$: Observable<Dessert[]>;
  dessertList$: Observable<Dessert[]>;

  constructor(private cart : DessertCartService, private list : DessertListService) { 
    this.cartList$ = cart.cartList.asObservable();
    this.dessertList$ = list.dessertList.asObservable();
  }

  ngOnInit(): void {
  }

  removeFromCart(dessert: Dessert): void{
    this.cart.removeFromCart(dessert);
    this.list.restoreQuantity(dessert);
  }

  isEmpty(){
    let cartLength = this.cart.getCartLength();
    if(cartLength <= 0){
      return true;
    }
    else{
      return false;
    }
  }

  getTotalValue(){
    return this.cart.getTotalValue();
  }

  buy(){
    alert("Ups... ¡Sin implementar!");
  }
}
