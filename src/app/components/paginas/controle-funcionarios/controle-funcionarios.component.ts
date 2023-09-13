import { Component } from '@angular/core';
import { RequestCadastroFuncionario } from '../../../models/request-cadastro-funcionario';
import { AuthService } from '../../../service/auth/auth.service'; // Importe AuthService


@Component({
  selector: 'app-controle-funcionarios',
  templateUrl: './controle-funcionarios.component.html',
  styleUrls: ['./controle-funcionarios.component.css']
})
export class ControleFuncionariosComponent {
  isAdmin: boolean = false; 
  public requestCadastroFuncionario: RequestCadastroFuncionario = new RequestCadastroFuncionario()

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.getUserRole() === 'admin';}
}
