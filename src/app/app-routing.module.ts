import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialAdmComponent } from './components/paginas/inicial-adm/inicial-adm.component';
import { InicialCozinhaComponent } from './components/paginas/inicial-cozinha/inicial-cozinha.component';
import { InicialGarconComponent } from './components/paginas/inicial-garcon/inicial-garcon.component';
import { LoginComponent } from './components/paginas/login/login.component';
import { PedidosEmAndamentoComponent } from './components/paginas/pedidos-em-andamento/pedidos-em-andamento.component';
import { PedidosConcluidosComponent } from './components/paginas/pedidos-concluidos/pedidos-concluidos.component';
import { ResumoPedidoComponent } from './components/paginas/resumo-pedido/resumo-pedido.component';
import { ControleFuncionariosComponent } from './components/paginas/controle-funcionarios/controle-funcionarios.component';
import { ControleItensComponent } from './components/paginas/controle-itens/controle-itens.component';

import { TabelaItensMenuComponent } from './components/componentes-em-comum/tabela-itens-menu/tabela-itens-menu.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  
  { path: 'inicial-adm', component: InicialAdmComponent },
  { path: 'inicial-cozinha', component: InicialCozinhaComponent },
  { path: 'inicial-garcon', component: InicialGarconComponent },
  { path: 'pedidos-em-andamento', component: PedidosEmAndamentoComponent },
  { path: 'pedidos-concluidos', component: PedidosConcluidosComponent },
  { path: 'resumo-pedido', component: ResumoPedidoComponent },
  { path: 'controle-funcionarios', component: ControleFuncionariosComponent },
  { path: 'controle-itens', component: ControleItensComponent },

  { path: 'tabela-itens-menu', component: TabelaItensMenuComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
