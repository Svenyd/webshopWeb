import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductService} from '../../product.service';
import {CartService} from '../../../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @ViewChild('amount')amount: ElementRef;

  constructor(private productService: ProductService, private cart: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cart.add(this.product, Number(this.amount.nativeElement.value));
  }
}
