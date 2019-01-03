import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

}
