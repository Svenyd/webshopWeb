import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.model';
import {ProductService} from '../product.service';
import {AppConfig} from '../../app.config';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  picture_URL = this.config.getPictureUrl();

  products: Product[];

  constructor(private productService: ProductService, private config: AppConfig) { }

  ngOnInit() {
    this.productService.getProductsFromServer().subscribe(products => this.products = products);
  }

  showInfo(product: Product) {
    this.productService.infoProduct.emit(product);
  }
}
