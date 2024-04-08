import { Component, OnInit, signal } from '@angular/core';
import { DrinkDashboardService } from '../../service/dashboard/drink.dashboard.service';
import { DrinkStoreService } from '../../state/drink.store';
import { provideComponentStore } from '@ngrx/component-store';
import { AsyncPipe, NgFor } from '@angular/common';
import { DrinksItemComponent } from '../drinks.item/drinks.item.component';

@Component({
  selector: 'app-drinks-dashboard',
  standalone: true,
  templateUrl: './drinks.dashboard.component.html',
  styleUrl: './drinks.dashboard.component.css',
  providers: [provideComponentStore(DrinkStoreService), DrinkDashboardService],
  imports: [NgFor, AsyncPipe, DrinksItemComponent],
})
export class DrinksDashboardComponent implements OnInit {
  allDrinks$ = signal(this.dashboardService.allDrinks$);

  constructor(private dashboardService: DrinkDashboardService) {}

  ngOnInit(): void {}
}
