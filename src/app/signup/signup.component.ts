import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SignupService} from './signup.service';
import {User} from '../models/user.model';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('name') name: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('password') password: ElementRef;
  @ViewChild('passwordCheck') passwordCheck: ElementRef;
  @ViewChild('phone') phone: ElementRef;
  @ViewChild('street') street: ElementRef;
  @ViewChild('city') city: ElementRef;
  @ViewChild('postcode') postcode: ElementRef;

  errorEmail = false;
  errorPassword = false;

  constructor(private signupService: SignupService, private loginService: LoginService) { }

  ngOnInit() {
  }

  onSignUp() {
    this.errorPassword = false;
    this.errorEmail = false;
    if (this.password.nativeElement.value === this.passwordCheck.nativeElement.value) {
      this.signupService.signUp(
        new User(
          this.name.nativeElement.value,
          this.email.nativeElement.value,
          this.phone.nativeElement.value,
          this.password.nativeElement.value,
          this.postcode.nativeElement.value,
          this.street.nativeElement.value,
          this.city.nativeElement.value,
        )).subscribe(user => {
        console.log(user);
        if (user != null) {
          this.loginService.login(user);
        } else {
          this.errorEmail = true;
        }
      });
    } else {
      this.errorPassword = true;
    }
  }

}
