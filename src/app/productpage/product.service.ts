import {EventEmitter, Injectable} from '@angular/core';
import {Product} from '../models/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {
  private product_url = 'http://localhost:4200/api/products';
  infoProduct = new EventEmitter<Product>();

  constructor(private httpClient: HttpClient) { }

  products: Product[] = [
    new Product('Boerenzoon', 10, 'Pizza pannekoek', ['Gehakt', 'Champions', 'Ui', 'Paprika', 'Kaas']
      , 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/2015_01_Spekpannenkoek.jpg/1200px-2015_01_Spekpannenkoek.jpg'
    ),
    new Product('Klein duimpje', 11, 'Ijs', ['Vanille ijs', 'Aardbij ijs', 'Slagroom', 'Wafel', 'Versiering']
      , 'https://chickslovefood.com/wp-content/uploads/sites/4/2017/08/RECEPT-SNICKERS-IJS-ZONDER-IJSMACHINE.jpg'
    )
];

  getProducts() {
    return this.products.slice();
  }

  getProductsFromServer() {
    return this.httpClient.get<Product[]>(this.product_url);
  }
}
