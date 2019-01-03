import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  private user: User = null;

  public isLoggedIn() {
    return this.user != null;
  }

  public getUser() {
    return this.user;
  }
}
