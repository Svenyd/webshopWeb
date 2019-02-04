import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../login/login.service';
import {AppConfig} from '../app.config';
import {Product} from '../models/product.model';
import {Injectable} from '@angular/core';
import {User} from '../models/user.model';

@Injectable()
export class AdminService {

  private product_url = `${this.config.getUrl()}/products`;
  private user_url = `${this.config.getUrl()}/users`;

  constructor(private loginService: LoginService, private config: AppConfig, private httpClient: HttpClient) {}

  getProducts() {
    return this.httpClient.get<Product[]>(this.product_url);
  }

  addProduct(formdata) {
    const httpHeaders = new HttpHeaders({
      'Authorization': this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.post<Product>(this.product_url, formdata, options);
  }

  deleteProduct(product: Product) {
    const httpHeaders = new HttpHeaders({
      'Authorization': this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    const new_url = `${this.product_url}/${product.name}`;
    return this.httpClient.delete(new_url, options);
  }

  updateProduct(product: Product) {
    const productJSON = JSON.stringify(product);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    const new_url = `${this.product_url}/${product.name}`;
    return this.httpClient.put(new_url, productJSON, options);
  }

  getUsers() {
    const httpHeaders = new HttpHeaders({
      'Authorization': this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpClient.get<User[]>(this.user_url, options);
  }

  updateUser(user: User) {
    const userJSON = JSON.stringify(user);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    const new_url = `${this.user_url}/${user.email}`;
    return this.httpClient.put(new_url, userJSON, options);
  }

  deleteUser(user: User) {
    const httpHeaders = new HttpHeaders({
      'Authorization': this.loginService.authentication
    });
    const options = {
      headers: httpHeaders
    };
    const new_url = `${this.user_url}/${user.email}`;
    return this.httpClient.delete(new_url, options);
  }
}
