import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../service/users/users.service';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../service/auth/auth.service'; // Importe AuthService

@Component({
  selector: 'app-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.css'],
})
export class TabelaFuncionariosComponent implements OnInit {
  tabelaItens: User[] = [];
  isAdmin: boolean = false;

  constructor(private userService: UsersService, private authService: AuthService) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
  
    if (!token) {
      console.log('Token JWT não está disponível no localStorage.');
      return;
    }
  
    this.isAdmin = this.authService.getUserRole() === 'admin';
  
    if (this.isAdmin) {
      console.log('Enviando solicitação GET para /users...'); // Adicione este log
  
      this.userService.getAllUsers().subscribe(
        (users) => {
          console.log('Resposta da solicitação GET para /users:', users); // Adicione este log
  
          this.tabelaItens = users.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          }));
        },
        (error) => {
          console.error('Erro ao buscar dados de usuários:', error);
        }
      );
    }
  }

}
