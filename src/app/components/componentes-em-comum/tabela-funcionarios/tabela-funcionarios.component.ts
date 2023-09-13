import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../service/users/users.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.css'],
})
export class TabelaFuncionariosComponent implements OnInit {
  tabelaItens: User[] = []; 

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      this.tabelaItens = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      }));
    });
    
  }
}


