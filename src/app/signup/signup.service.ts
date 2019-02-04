import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {AppConfig} from '../app.config';

@Injectable()
export class SignupService {

  private userURL = `${this.config.getUrl()}/users`;

  constructor(private httpCliet: HttpClient, private config: AppConfig) { }

  signUp(user): Observable<User> {
    const userJSON = JSON.stringify(user);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = {
      headers: httpHeaders
    };
    return this.httpCliet.post<User>(this.userURL, userJSON, options);
  }

}
