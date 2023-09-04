import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCafeDaManhaComponent } from './menu-cafe-da-manha.component';

describe('MenuCafeDaManhaComponent', () => {
  let component: MenuCafeDaManhaComponent;
  let fixture: ComponentFixture<MenuCafeDaManhaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCafeDaManhaComponent]
    });
    fixture = TestBed.createComponent(MenuCafeDaManhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
