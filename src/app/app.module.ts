import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginService} from './login/login.service';
import { ProductListComponent } from './productpage/product-list/product-list.component';
import { ProductComponent } from './productpage/product-list/product/product.component';
import {ProductService} from './productpage/product.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SignupService} from './signup/signup.service';

const appRoutes: Routes = [
  {path: '', component: ProductpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    ProductpageComponent,
    CartComponent,
    CheckoutComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    ProductService,
    HttpClientModule,
    SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
