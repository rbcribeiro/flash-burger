import { ChangeDetectorRef, Component } from '@angular/core';
import { UsersService } from '../../../service/users/users.service';
import { AuthService } from '../../../service/auth/auth.service';

import { User } from '../../../models/user.model';

@Component({
  selector: 'app-controle-funcionarios',
  templateUrl: './controle-funcionarios.component.html',
  styleUrls: ['./controle-funcionarios.component.css']
})
export class ControleFuncionariosComponent {
  requestCadastroFuncionario = {
    name: '',
    email: '',
    password: '',
    role: ''
  };
  isAdmin: boolean = false;
  novoFuncionario: { name: string; email: string; password: string; role: string } = {
    name: '',
    email: '',
    password: '',
    role: ''
  };
  
  
  

  constructor(private userService: UsersService, private authService: AuthService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.getUserRole() === 'admin';
  }

  cadastrarFuncionario() {
    this.novoFuncionario = {
      name: this.requestCadastroFuncionario.name,
      email: this.requestCadastroFuncionario.email,
      password: this.requestCadastroFuncionario.password,
      role: this.requestCadastroFuncionario.role
    };
  
    this.userService.cadastrarFuncionario(this.novoFuncionario)
      .subscribe(
        (response: User) => {
          if (response && response.id && response.name && response.email && response.role) {
            console.log('Funcionário cadastrado com sucesso. ID:', response.id);
            this.requestCadastroFuncionario = {
              name: '',
              email: '',
              password: '',
              role: ''
            };
  
            // Forçar a detecção de mudanças para atualizar a tabela
            this.cdr.detectChanges();
          } else {
            console.error('Resposta do servidor está incompleta após o cadastro');
          }
        },
        error => {
          console.error('Erro ao cadastrar funcionário', error);
        }
      );
  }
  
}
