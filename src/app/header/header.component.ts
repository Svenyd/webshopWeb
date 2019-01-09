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

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = this.loginService.user;
  }

  logout() {
    this.loginService.logout();
    this.user = null;
  }

}
