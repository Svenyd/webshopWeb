import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login/login.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  isLoggedIn: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.user;
    this.loginService.loggedIn.subscribe(isLoggedIn => this.logInChange(isLoggedIn));
  }

  logInChange(isLoggedIn: boolean) {
    this.isLoggedIn = isLoggedIn;
    this.user = this.loginService.user;
  }

  logout() {
    this.loginService.logout();
    this.user = this.loginService.user;
  }

}
