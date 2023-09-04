import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialCozinhaComponent } from './inicial-cozinha.component';

describe('InicialCozinhaComponent', () => {
  let component: InicialCozinhaComponent;
  let fixture: ComponentFixture<InicialCozinhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialCozinhaComponent]
    });
    fixture = TestBed.createComponent(InicialCozinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
