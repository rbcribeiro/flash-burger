import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() modalTitle: string = "";
  @Input() modalBody: string = "";
  @Input() modalBody2: string = "";
  @Input() modalAberto: boolean = false;


  abrirModal() {
    this.modalAberto = true;
    
  }

  fecharModal() {
    this.modalAberto = false;
  }
}
