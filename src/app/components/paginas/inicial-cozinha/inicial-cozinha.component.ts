import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial-cozinha',
  templateUrl: './inicial-cozinha.component.html',
  styleUrls: ['./inicial-cozinha.component.css']
})
export class InicialCozinhaComponent {
  imageUrl: string = '../../../assets/logo-flash-burger.png';

  constructor(private router: Router) { }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
