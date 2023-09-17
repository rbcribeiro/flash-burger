import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../service/users/users.service';

@Component({
  selector: 'app-tabela-funcionarios',
  templateUrl: './tabela-funcionarios.component.html',
  styleUrls: ['./tabela-funcionarios.component.css'],
})

export class TabelaFuncionariosComponent implements OnInit {
  tabelaItens: any[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe((data) => {
      this.tabelaItens = data;
    });
  }
}
