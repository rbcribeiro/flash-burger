import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleItensComponent } from './controle-itens.component';

describe('ControleItensComponent', () => {
  let component: ControleItensComponent;
  let fixture: ComponentFixture<ControleItensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControleItensComponent]
    });
    fixture = TestBed.createComponent(ControleItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
