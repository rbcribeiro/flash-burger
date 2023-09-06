import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { JwtHelperService } from '@auth0/angular-jwt'; 

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = 'http://localhost:8080/auth';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  private userRole: string | null = null;

  constructor(
    private httpClient: HttpClient,
    private jwtHelper: JwtHelperService ) {}

    login(email: string, password: string): Observable<{ token: string }> {
      const requestBody = { email, password };
      return this.httpClient.post<{ token: string }>(`${this.apiUrl}`, requestBody, this.httpOptions).pipe(
        tap((response: { token: string }) => {
          const token = response.token; 
    
          console.log('Token JWT recebido do servidor:', token);
    
          localStorage.setItem('access_token', token);
    
          const decodedToken = this.jwtHelper.decodeToken(token);
    
          if (decodedToken && decodedToken.role) {
            this.userRole = decodedToken.role;
          } else {
            this.userRole = null;
          }
        }),
        catchError((error) => {
          console.error('Erro durante o login:', error);
          throw error; 
        })
      );
    }
    
  getUserRole(): string | null {
    return this.userRole;
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.userRole = null;
  }
}
