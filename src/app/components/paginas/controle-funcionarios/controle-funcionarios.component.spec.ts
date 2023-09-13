import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleFuncionariosComponent } from './controle-funcionarios.component';

describe('ControleFuncionariosComponent', () => {
  let component: ControleFuncionariosComponent;
  let fixture: ComponentFixture<ControleFuncionariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControleFuncionariosComponent]
    });
    fixture = TestBed.createComponent(ControleFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
