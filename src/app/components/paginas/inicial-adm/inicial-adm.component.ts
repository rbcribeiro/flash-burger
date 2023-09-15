import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth/auth.service'; 

@Component({
  selector: 'app-inicial-adm',
  templateUrl: './inicial-adm.component.html',
  styleUrls: ['./inicial-adm.component.css']
})
export class InicialAdmComponent implements OnInit {
  imageUrl: string = '../../../assets/logo-flash-burger.png';

  constructor(
    private router: Router,
    private authService: AuthService 
  ) {}

  ngOnInit() {
    const token = this.authService.getToken();
  
    if (!token || !this.authService.isTokenValid(token)) {
      this.router.navigate(['/login']); 
      return;
    }
  
  }
  
  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
