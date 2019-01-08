import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product_url = 'http://localhost:4200/api/products';

  constructor(private httpClient: HttpClient) { }

  products: Product[] = [
    new Product('Test', 10),
    new Product('Test2', 11)
  ];

  getProducts() {
    return this.products.slice();
  }

  getProductsFromServer() {
    return this.httpClient.get<Product[]>(this.product_url);
  }
}
