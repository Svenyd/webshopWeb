import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CartService} from './cart.service';
import {CartItem} from '../models/cartItem.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('amount')amount: ElementRef;

  cart: {cartItems: CartItem[], totalPrice: number};

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  countDown(cartItem: CartItem) {
    if (cartItem.amount !== 1) {
      this.cartService.add(cartItem.product, -1);
      this.cart = this.cartService.cart;
    }
  }

  countUp(cartItem: CartItem) {
    this.cartService.add(cartItem.product, 1);
    this.cart = this.cartService.cart;
  }

  remove(cartItem: CartItem) {
    this.cartService.remove(cartItem);
    this.cart = this.cartService.cart;
  }
}
