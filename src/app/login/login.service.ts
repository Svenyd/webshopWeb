import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class LoginService {

  private userURL = 'https://localhost:4200/api/users';

  user: User = new User('Sven van Duijn', 'sven.duijn@gmail.com', '0623815065', 'password', '2224DT', 'Geelhartje 3', 'Katwijk');
  // user: User = null;

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }

  public isLoggedIn() {
    return this.user.name !== '';
  }


  authenticate(username: string, password: string) {
    const newUrl = `${this.userURL}/me`;
    const base64 = 'Basic ' + btoa(username + ':' + password);
    const httpHeaders = new HttpHeaders({
      'Authorization' : base64
    });
    const options = {
      headers: httpHeaders
    };

    return this.httpClient.get<User>(newUrl, options);
  }

  login(user: User) {
    this.user = user;
    this.router.navigate([`../../`], {relativeTo: this.route});
  }

  logout() {
    this.user = new User('', '', '', '', '', '', '');
  }

  saveInfo(street: string, city: string, postcode: string, phone: string) {
    this.user.street = street;
    this.user.city = city;
    this.user.postcode = postcode;
    this.user.phone = phone;

    // TODO: send to server
  }
}
