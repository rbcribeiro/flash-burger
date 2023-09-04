import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosConcluidosComponent } from './pedidos-concluidos.component';

describe('PedidosConcluidosComponent', () => {
  let component: PedidosConcluidosComponent;
  let fixture: ComponentFixture<PedidosConcluidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosConcluidosComponent]
    });
    fixture = TestBed.createComponent(PedidosConcluidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
