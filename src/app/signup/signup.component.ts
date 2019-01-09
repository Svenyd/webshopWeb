import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SignupService} from './signup.service';
import {logging} from 'selenium-webdriver';

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
  @ViewChild('house_number') house_number: ElementRef;
  @ViewChild('city') city: ElementRef;
  @ViewChild('postcode') postcode: ElementRef;

  constructor(private signupService: SignupService) { }

  ngOnInit() {
  }

  onSignUp() {
    console.log(this.password.nativeElement.value);
    console.log(this.passwordCheck.nativeElement.value);
    if (this.password.nativeElement.value === this.passwordCheck.nativeElement.value) {
      this.signupService.signUp({
        name: this.name.nativeElement.value,
        email: this.email.nativeElement.value,
        password: this.password.nativeElement.value,
        postcode: this.postcode.nativeElement.value,
        city: this.city.nativeElement.value,
        house_number: this.house_number.nativeElement.value
      }).subscribe(() => console.log('Signed Up!'));
    }
  }
}
