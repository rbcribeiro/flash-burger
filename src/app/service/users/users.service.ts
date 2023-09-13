import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'https://flash-burger-api.vercel.app';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    
    return this.http.get<User[]>(`${this.baseUrl}/users`, httpOptions);
  }
  

  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/${userId}`);
  }

  updateUserStatus(userId: number, newStatus: string): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}/users/${userId}`, { status: newStatus });
  }

  deleteUserById(userId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/users/${userId}`);
  }

}
