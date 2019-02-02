import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from '../login/login.service';
import {User} from '../models/user.model';
import {CartService} from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  @ViewChild('name')name: ElementRef;
  @ViewChild('street')street: ElementRef;
  @ViewChild('city')city: ElementRef;
  @ViewChild('postcode')postcode: ElementRef;
  @ViewChild('phone')phone: ElementRef;

  user: User;
  isLoggedIn;
  editAddress: boolean;
  cart;
  readyToPay: boolean;

  constructor(private loginService: LoginService, private cartService: CartService) { }

  ngOnInit() {
    this.user = this.loginService.user;
    this.isLoggedIn = this.loginService.isLoggedIn;
    this.cart = this.cartService.cart;
  }

  saveInfo() {
    this.editAddress = false;
    this.loginService.saveInfo(
      this.street.nativeElement.value,
      this.city.nativeElement.value,
      this.postcode.nativeElement.value,
      this.phone.nativeElement.value
    );
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
