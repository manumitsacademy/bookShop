import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProducts=[];
  constructor() { }
  cartSubject = new Subject();
  addProdToCart(p){
    this.cartProducts.push(p);
    this.cartSubject.next(this.cartProducts.length)
  }
}
