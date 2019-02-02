import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

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
import {HttpClientModule} from '@angular/common/http';
import {SignupService} from './signup/signup.service';
import {CartService} from './cart/cart.service';
import { PaidComponent } from './paid/paid.component';
import { AdminComponent } from './admin/admin.component';
import {AppConfig} from './app.config';
import {AdminService} from './admin/admin.service';
import { ProtectedDirective } from './directives/protected.directive';

const appRoutes: Routes = [
  {path: '', component: ProductpageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'cart', component: CartComponent},
  {path: 'cart/checkout', component: CheckoutComponent},
  {path: 'paid', component: PaidComponent},
  {path: 'admin', component: AdminComponent}
];

export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}
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
    ProductComponent,
    PaidComponent,
    AdminComponent,
    ProtectedDirective
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: false}
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig],
      multi: true
    },
    AdminService,
    LoginService,
    ProductService,
    CartService,
    HttpClientModule,
    SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
