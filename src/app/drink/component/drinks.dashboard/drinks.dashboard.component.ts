import { Component, OnInit, signal } from '@angular/core';
import { DrinkDashboardService } from '../../service/dashboard/drink.dashboard.service';
import { DrinkStoreService } from '../../state/drink.store';
import { provideComponentStore } from '@ngrx/component-store';
import { AsyncPipe, NgFor } from '@angular/common';
import { DrinksItemComponent } from '../drinks.grid/drinks.item/drinks.item.component';
import { DrinksGridComponent } from '../drinks.grid/drinks.grid.component';
import { DrinksLoaderComponent } from '../drinks.loader/drinks.loader.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-drinks-dashboard',
  standalone: true,
  templateUrl: './drinks.dashboard.component.html',
  styleUrl: './drinks.dashboard.component.css',
  providers: [],
  imports: [
    AsyncPipe,
    DrinksItemComponent,
    DrinksGridComponent,
    DrinksLoaderComponent,
    RouterOutlet,
  ],
})
export class DrinksDashboardComponent implements OnInit {
  allDrinks$ = signal(this.dashboardService.allDrinks$);

  constructor(private dashboardService: DrinkDashboardService) {}

  ngOnInit(): void {}
}
