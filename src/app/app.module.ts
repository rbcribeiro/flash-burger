import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialAdmComponent } from './components/paginas/inicial-adm/inicial-adm.component';
import { InicialCozinhaComponent } from './components/paginas/inicial-cozinha/inicial-cozinha.component';
import { InicialGarconComponent } from './components/paginas/inicial-garcon/inicial-garcon.component';
import { MenuAlmocoComponent } from './components/paginas/menu-almoco/menu-almoco.component';
import { MenuCafeDaManhaComponent } from './components/paginas/menu-cafe-da-manha/menu-cafe-da-manha.component';
import { ResumoPedidoComponent } from './components/paginas/resumo-pedido/resumo-pedido.component';
import { PedidosConcluidosComponent } from './components/paginas/pedidos-concluidos/pedidos-concluidos.component';
import { LoginComponent } from './components/paginas/login/login.component';
import { PedidosEmAndamentoComponent } from './components/paginas/pedidos-em-andamento/pedidos-em-andamento.component';
import { BotaoEnviarComponent } from './components/componentes-em-comum/botao-enviar/botao-enviar.component';
import { InputComponent } from './components/componentes-em-comum/input/input.component';
import { TituloComponent } from './components/componentes-em-comum/titulo/titulo.component';
import { TabelaFuncionariosComponent } from './components/componentes-em-comum/tabela-funcionarios/tabela-funcionarios.component';
import { TabelaItensMenuComponent } from './components/componentes-em-comum/tabela-itens-menu/tabela-itens-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicialAdmComponent,
    InicialCozinhaComponent,
    InicialGarconComponent,
    MenuAlmocoComponent,
    MenuCafeDaManhaComponent,
    ResumoPedidoComponent,
    PedidosConcluidosComponent,
    LoginComponent,
    PedidosEmAndamentoComponent,
    BotaoEnviarComponent,
    InputComponent,
    TituloComponent,
    TabelaFuncionariosComponent,
    TabelaItensMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
