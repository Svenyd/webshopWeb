export class Product {

  name: string;
  price: number;
  category: string;
  ingredients: string[];
  picture: string;

  constructor(name: string, price: number, category: string, ingredients: string[], picture: string) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.ingredients = ingredients;
    this.picture = picture;
  }
}
