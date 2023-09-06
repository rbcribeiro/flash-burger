import { Component, OnInit } from '@angular/core';
import { RequestLogin } from '../../../models/request-login';
import { AuthService } from '../../../service/auth/auth.service';
import { Router } from '@angular/router';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  imageUrl: string = '../../../assets/logo-flash-burger.png';
  public requestLogin: RequestLogin = new RequestLogin();

  constructor(private authService: AuthService, private router: Router) {} 

  ngOnInit(): void { }

  public login(): void {
    const { email, password } = this.requestLogin;

    this.authService.login(email, password)
      .pipe(
        switchMap(() => {
          const userRole = this.authService.getUserRole();

          console.log('Role do usuário após o login:', userRole);

          if (userRole === 'admin') {
            return this.router.navigate(['inicial-adm']);
          } else if (userRole === 'waiter') {
            return this.router.navigate(['inicial-garcon']);
          } else if (userRole === 'chef') {
            return this.router.navigate(['inicial-cozinha']);
          } else {
            return this.router.navigate(['/']);
          }
        }),
        catchError((error) => {
          console.error('Erro durante o login:', error);
          return of(null); 
        })
      )
      .subscribe();
  }
}
