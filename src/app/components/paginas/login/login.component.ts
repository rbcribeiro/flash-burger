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

  ngOnInit(): void {
    // Verifique se há um token de autenticação no Local Storage ao carregar a página.
    const token = this.authService.getToken();
    const userRole = this.authService.getUserRole();

    if (token && userRole) {
      console.log('Usuário autenticado após refresh.');
      
      // Redirecione com base na função do usuário.
      this.redirectBasedOnUserRole(userRole);
    }
  }

  public login(): void {
    const { email, password } = this.requestLogin;

    this.authService.login(email, password)
      .pipe(
        switchMap(() => {
          const userRole = this.authService.getUserRole();
          console.log('Role do usuário após o login:', userRole);

          this.redirectBasedOnUserRole(userRole);

          return of(null);
        }),
        catchError((error) => {
          console.error('Erro durante o login:', error);
          return of(null);
        })
      )
      .subscribe();
  }

  private redirectBasedOnUserRole(userRole: string | null): void {
    if (userRole === 'admin') {
      this.router.navigate(['inicial-adm']);
    } else if (userRole === 'waiter') {
      this.router.navigate(['inicial-garcon']);
    } else if (userRole === 'chef') {
      this.router.navigate(['inicial-cozinha']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
