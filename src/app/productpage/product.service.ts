import { Injectable } from '@angular/core';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: Product[] = [
    new Product('Test', 10),
    new Product('Test2', 11)
  ];

  getProducts() {
    return this.products.slice();
  }
}
