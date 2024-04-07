import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksDashboardComponent } from './drinks.dashboard.component';

describe('DrinksDashboardComponent', () => {
  let component: DrinksDashboardComponent;
  let fixture: ComponentFixture<DrinksDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinksDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
