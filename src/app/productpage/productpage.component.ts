import { Component, OnInit } from '@angular/core';
import {ProductService} from './product.service';
import {Product} from '../models/product.model';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  infoProduct: Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.infoProduct
      .subscribe((product: Product) => {
        this.infoProduct = product;
      });
  }

}
