export class User {
  name: string;
  email: string;
  phone: string;
  password: string;
  postcode: string;
  street: string;
  city: string;


  constructor(name: string, email: string, phone: string, password: string, postcode: string, street: string, city: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.postcode = postcode;
    this.street = street;
    this.city = city;
  }
}
