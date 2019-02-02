import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../models/product.model';
import {AdminService} from './admin.service';
import {AppConfig} from '../app.config';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products: Product[] = [];
  addProduct: boolean;
  ingredientCount = 0;
  newProduct: Product = new Product();

  @ViewChild('name')name: ElementRef;
  @ViewChild('price')price: ElementRef;
  @ViewChild('ingredients')ingredients: ElementRef;

  selectedPicture = null;

  picture_url = this.config.getPictureUrl();

  constructor(private adminService: AdminService, private config: AppConfig) { }

  ngOnInit() {
    this.adminService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  saveProduct() {
    const fd = new FormData();
    fd.append('name', this.name.nativeElement.value);
    fd.append('price', this.price.nativeElement.value);
    fd.append('ingredients', JSON.stringify(this.newProduct.ingredients));
    fd.append('picture', this.selectedPicture);
    this.adminService.addProduct(fd).subscribe();
  }

  onFileSelected(event) {
    this.selectedPicture = <File>event.target.files[0];
  }

  remove(product: Product) {
    this.adminService.deleteProduct(product).subscribe();
  }

  addIngredient() {
    this.ingredientCount += 1;
    if (this.ingredients.nativeElement.value !== '') {
      this.newProduct.ingredients.push(this.ingredients.nativeElement.value);
    }
  }

  onNewProduct() {
    this.addProduct = true;
  }
}
