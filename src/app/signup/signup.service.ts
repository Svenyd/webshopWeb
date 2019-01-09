import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class SignupService {

  private userURL = 'https://localhost:4200/api/users';

  constructor(private httpCliet: HttpClient) { }

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
