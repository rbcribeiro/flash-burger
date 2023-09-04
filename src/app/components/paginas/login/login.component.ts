import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() email: string = '';
  @Input() senha: string = '';
  imageUrl: string = '../../../assets/logo-flash-burger.png'; 

  constructor() { }
}
