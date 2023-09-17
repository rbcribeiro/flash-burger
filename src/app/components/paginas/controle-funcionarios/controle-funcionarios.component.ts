import { ChangeDetectorRef, Component } from '@angular/core';
import { UsersService } from '../../../service/users/users.service';
import { AuthService } from '../../../service/auth/auth.service';
import { User } from '../../../models/user.model';
import { ModalComponent } from '../../components-em-comum/modal/modal.component'; 


@Component({
  selector: 'app-controle-funcionarios',
  templateUrl: './controle-funcionarios.component.html',
  styleUrls: ['./controle-funcionarios.component.css']
})
export class ControleFuncionariosComponent {
  modalTitle: string = "";
  modalBody: string = "";
  modalBody2: string = ""; 
  modalAberto: boolean = false;
  usuarios: User[] = []; 


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
    this.userService.getAllUsers().subscribe(
      (users: User[]) => {
        if (users && users.length > 0) {
          this.usuarios = users; 
        }
      },
      error => {
        console.error('Erro ao obter usuários', error);
      }
    );
  }

  abrirModal(usuario: User) {
    this.modalTitle = `${usuario.name}`;
    this.modalBody = `${usuario.email}`; 
    this.modalBody2 = `Cargo: ${usuario.role}`;
    this.modalAberto = true; 
  }

  fecharModal() {
    this.modalAberto = false; 
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
