import {Injectable, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {CartItem} from '../models/cartItem.model';

@Injectable()
export class CartService {
  cart: {cartItems: CartItem[], totalPrice: number} = {cartItems: [], totalPrice: 0};

  constructor() {}

  add(product: Product, amount: number) {
    let isInCart = false;
    for (const cartItem of this.cart.cartItems) {
      if (cartItem.product.name === product.name) {
        isInCart = true;
        cartItem.amount += amount;
      }
    }
    if (!isInCart) {
      this.cart.cartItems.push(new CartItem(product, amount));
    }
    this.cart.totalPrice += (product.price * amount);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = {cartItems: [], totalPrice: 0};
  }

  remove(cartItem: CartItem) {
    for (const item of this.cart.cartItems) {
      if (item.product.name === cartItem.product.name) {
        this.cart.cartItems.splice(this.cart.cartItems.indexOf(item), 1);
        this.cart.totalPrice -= cartItem.amount * cartItem.product.price;
        console.log('remove item');
      }
    }
  }
}
