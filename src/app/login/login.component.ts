import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LoginService} from './login.service';
import {User} from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLogin() {
    this.loginService.authenticate(this.username.nativeElement.value, this.password.nativeElement.value)
      .subscribe(user => this.loginService.login(user));
  }

}
