import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../app.config';

@Injectable()
export class ProductService implements OnInit {

  private product_url = `${this.config.getUrl()}/products`;
  infoProduct = new EventEmitter<Product>();

  products: Product[] = [];

  constructor(private httpClient: HttpClient, private config: AppConfig) { }

  ngOnInit(): void {
    this.getProductsFromServer().subscribe(products => console.log(products));
  }

  getProducts() {
    return this.products.slice();
  }

  getProductsFromServer() {
    return this.httpClient.get<Product[]>(this.product_url);
  }
}
