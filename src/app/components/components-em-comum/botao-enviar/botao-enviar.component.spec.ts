import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoEnviarComponent } from './botao-enviar.component';

describe('BotaoEnviarComponent', () => {
  let component: BotaoEnviarComponent;
  let fixture: ComponentFixture<BotaoEnviarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoEnviarComponent]
    });
    fixture = TestBed.createComponent(BotaoEnviarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
