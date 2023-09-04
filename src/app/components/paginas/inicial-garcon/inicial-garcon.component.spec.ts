import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicialGarconComponent } from './inicial-garcon.component';

describe('InicialGarconComponent', () => {
  let component: InicialGarconComponent;
  let fixture: ComponentFixture<InicialGarconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicialGarconComponent]
    });
    fixture = TestBed.createComponent(InicialGarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
