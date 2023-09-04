import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaItensMenuComponent } from './tabela-itens-menu.component';

describe('TabelaItensMenuComponent', () => {
  let component: TabelaItensMenuComponent;
  let fixture: ComponentFixture<TabelaItensMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaItensMenuComponent]
    });
    fixture = TestBed.createComponent(TabelaItensMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
