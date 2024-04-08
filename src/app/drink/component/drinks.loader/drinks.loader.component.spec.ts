import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksLoaderComponent } from './drinks.loader.component';

describe('DrinksLoaderComponent', () => {
  let component: DrinksLoaderComponent;
  let fixture: ComponentFixture<DrinksLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DrinksLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
