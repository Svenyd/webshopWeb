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
    for (const item of this.cart.cartItems) {
      if (item === cartItem && item.amount !== 1) {
        item.amount -= 1;
        this.cart.totalPrice -= item.product.price;
      }
    }
  }

  countUp(cartItem: CartItem) {
    for (const item of this.cart.cartItems) {
      if (item === cartItem) {
        item.amount += 1;
        this.cart.totalPrice += item.product.price;
      }
    }
  }

  remove(cartItem: CartItem) {
    const index = this.cart.cartItems.indexOf(cartItem, 0);
    if (index > -1) {
      this.cart.cartItems.splice(index, 1);
    }
  }
}
