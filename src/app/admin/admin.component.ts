import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from '../models/product.model';
import {AdminService} from './admin.service';
import {AppConfig} from '../app.config';
import {User} from '../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products: Product[] = [];
  users: User[] = [];
  addProduct: boolean;
  ingredientCount = 0;

  newProduct: Product = new Product();
  @ViewChild('name')name: ElementRef;
  @ViewChild('price')price: ElementRef;
  @ViewChild('ingredients')ingredients: ElementRef;

  @ViewChild('editPrice')editPrice: ElementRef;
  @ViewChild('permission')permission: ElementRef;

  selectedPicture = null;
  picture_url = this.config.getPictureUrl();
  isEditPrice: Product;
  showProducts = true;
  isEditUser: User;

  constructor(private adminService: AdminService, private config: AppConfig) { }

  ngOnInit() {
    this.adminService.getProducts().subscribe(products => {
      this.products = products;
    });
    this.adminService.getUsers().subscribe(users => {
      this.users = users;
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
    this.adminService.deleteProduct(product).subscribe(() => {
      this.products.splice(this.products.indexOf(product), 1);
    });
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

  savePrice(product: Product) {
    for (const item of this.products) {
      if (item === product) {
        item.price = this.editPrice.nativeElement.value;
        this.adminService.updateProduct(product).subscribe(() => {
          this.isEditPrice = null;
        });
      }
    }
  }

  saveUser(user: User) {
    for (const item of this.users) {
      if (item === user) {
        item.role = this.permission.nativeElement.value === 'Admin' ? 'admin' : 'customer';
        this.adminService.updateUser(user).subscribe(() => {
          this.isEditUser = null;
        });
      }
    }
  }

  removeUser(user: User) {
    this.adminService.deleteUser(user).subscribe(() => {
      this.users.splice(this.users.indexOf(user), 1);
    });
  }
}
