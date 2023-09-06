import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial-garcon',
  templateUrl: './inicial-garcon.component.html',
  styleUrls: ['./inicial-garcon.component.css']
})
export class InicialGarconComponent {
  constructor(private router: Router) { }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
