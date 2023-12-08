import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInitialComponent } from './home-initial.component';

describe('HomeInitialComponent', () => {
  let component: HomeInitialComponent;
  let fixture: ComponentFixture<HomeInitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeInitialComponent]
    });
    fixture = TestBed.createComponent(HomeInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
