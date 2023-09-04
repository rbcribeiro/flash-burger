import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-botao-enviar',
  templateUrl: './botao-enviar.component.html',
  styleUrls: ['./botao-enviar.component.css']
})
export class BotaoEnviarComponent {
  @Input() textoDoBotao: string = '';

}
