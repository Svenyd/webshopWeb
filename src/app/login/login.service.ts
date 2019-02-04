import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AppConfig} from '../app.config';

@Injectable()
export class LoginService {

  private userURL = `${this.config.getUrl()}/users`;

  // user: User = new User('Sven van Duijn', 'sven.duijn@gmail.com', '0623815065', 'password', '2224DT', 'Geelhartje 3', 'Katwijk' , true);
  user: User = new User('', '', '', '', '', '', '');

  loggedIn = new EventEmitter<boolean>();
  isLoggedIn = false;
  authentication: string;

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute, private config: AppConfig) { }

  authenticate(username: string, password: string) {
    const newUrl = `${this.userURL}/me`;
    this.authentication = 'Basic ' + btoa(username + ':' + password);
    const httpHeaders = new HttpHeaders({
      'Authorization' : this.authentication
    });
    const options = {
      headers: httpHeaders
    };

    return this.httpClient.get<User>(newUrl, options);
  }

  login(user: User) {
    this.user = user;
    this.isLoggedIn = true;
    this.loggedIn.emit(this.isLoggedIn);
    this.router.navigate([`../`], {relativeTo: this.route});
  }

  logout() {
    this.user = new User('', '', '', '', '', '', '');
    this.isLoggedIn = false;
    this.loggedIn.emit(this.isLoggedIn);
  }

  saveInfo(street: string, city: string, postcode: string, phone: string) {
    this.user.street = street;
    this.user.city = city;
    this.user.postcode = postcode;
    this.user.phone = phone;
  }
}
