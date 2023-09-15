import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  baseUrl = 'https://flash-burger-api.vercel.app';

  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  cadastrarFuncionario(usuario: { name: string; email: string; role: string }): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<User>(`${this.baseUrl}/users`, usuario, httpOptions);
  }

  getAllUsers(): Observable<User[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<User[]>(`${this.baseUrl}/users`, httpOptions);
  }

  getUserById(userId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<any>(`${this.baseUrl}/users/${userId}`);
  }

  updateUserStatus(userId: number, newStatus: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.patch<any>(`${this.baseUrl}/users/${userId}`, { status: newStatus });
  }

  deleteUserById(userId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.delete<any>(`${this.baseUrl}/users/${userId}`);
  }

  addUser(user: User): void {
    const currentUsers = this.usersSubject.value;
    currentUsers.push(user);
    this.usersSubject.next(currentUsers);
  }
}
