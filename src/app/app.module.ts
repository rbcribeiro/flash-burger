import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/interceptor';
import { JwtModule } from '@auth0/angular-jwt'; 
import { MatDialogModule } from '@angular/material/dialog';


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
import { BotaoEnviarComponent } from './components/components-em-comum/botao-enviar/botao-enviar.component';
import { InputComponent } from './components/components-em-comum/input/input.component';
import { TituloComponent } from './components/components-em-comum/titulo/titulo.component';
import { TabelaFuncionariosComponent } from './components/components-em-comum/tabela-funcionarios/tabela-funcionarios.component';
import { TabelaItensMenuComponent } from './components/components-em-comum/tabela-itens-menu/tabela-itens-menu.component';
import { ControleFuncionariosComponent } from './components/paginas/controle-funcionarios/controle-funcionarios.component';
import { ControleItensComponent } from './components/paginas/controle-itens/controle-itens.component';
import { ModalComponent } from './components/components-em-comum/modal/modal.component';

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
    TabelaItensMenuComponent,
    ControleFuncionariosComponent,
    ControleItensComponent,
    ModalComponent,
    

  ],
  imports: [
    MatDialogModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('access_token'),
        allowedDomains: ['https://flash-burger-api.vercel.app/'], 
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }