export class Product {

  name: string;
  price: number;
  ingredients: string[];
  picture: string;

  constructor() {
    this.name = null;
    this.price = null;
    this.ingredients = [];
    this.picture = null;
  }

  // constructor(name: string, price: number, category: string, ingredients: string[], picture: string) {
  //   this.name = name;
  //   this.price = price;
  //   this.category = category;
  //   this.ingredients = ingredients;
  //   this.picture = picture;
  // }
}
