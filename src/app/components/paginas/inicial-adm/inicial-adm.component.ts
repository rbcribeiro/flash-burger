import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial-adm',
  templateUrl: './inicial-adm.component.html',
  styleUrls: ['./inicial-adm.component.css']
})
export class InicialAdmComponent {

  constructor(private router: Router) { }

  public navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
