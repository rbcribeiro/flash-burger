import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAlmocoComponent } from './menu-almoco.component';

describe('MenuAlmocoComponent', () => {
  let component: MenuAlmocoComponent;
  let fixture: ComponentFixture<MenuAlmocoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuAlmocoComponent]
    });
    fixture = TestBed.createComponent(MenuAlmocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
