import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialAdmComponent } from './inicial-adm.component';

describe('InicialAdmComponent', () => {
  let component: InicialAdmComponent;
  let fixture: ComponentFixture<InicialAdmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialAdmComponent]
    });
    fixture = TestBed.createComponent(InicialAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
