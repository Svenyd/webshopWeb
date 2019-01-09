import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Injectable()
export class LoginService {

  private userURL = 'https://localhost:4200/api/users';

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }
  user: User = null;

  public isLoggedIn() {
    return this.user != null;
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
    this.user = null;
  }
}
