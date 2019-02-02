import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginService} from '../login/login.service';
import {AppConfig} from '../app.config';
import {Product} from '../models/product.model';
import {Injectable} from '@angular/core';

@Injectable()
export class AdminService {

  private product_url = `${this.config.getUrl()}/products`;
  // private product_url = 'http://localhost:8080/api/products';

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
}
