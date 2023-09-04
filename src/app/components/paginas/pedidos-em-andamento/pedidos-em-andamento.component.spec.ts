import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosEmAndamentoComponent } from './pedidos-em-andamento.component';

describe('PedidosEmAndamentoComponent', () => {
  let component: PedidosEmAndamentoComponent;
  let fixture: ComponentFixture<PedidosEmAndamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosEmAndamentoComponent]
    });
    fixture = TestBed.createComponent(PedidosEmAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
