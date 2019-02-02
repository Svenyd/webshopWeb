import {Directive} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';

@Directive({
  selector: '[appProtected]'
})
export class ProtectedDirective {

  private sub: any = null;

  constructor(private loginService: LoginService, private router: Router) {
    if (loginService.user.role !== 'admin') {
      this.router.navigate([``]);
    }
  }
}
