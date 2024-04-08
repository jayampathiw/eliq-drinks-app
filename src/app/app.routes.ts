import { Routes } from '@angular/router';
import { DrinksDashboardComponent } from './drink/component/drinks.dashboard/drinks.dashboard.component';
import { DrinksDetailsComponent } from './drink/component/drinks.details/drinks.details.component';
import { DrinksGridComponent } from './drink/component/drinks.grid/drinks.grid.component';
import {
  drinksListResolver,
  selectedDrinkResolver,
} from './drink/resolvers/drinks.resolve';
import { DrinkStoreService } from './drink/state/drink.store';
import { DrinkDashboardService } from './drink/service/dashboard/drink.dashboard.service';
import { provideComponentStore } from '@ngrx/component-store';

export const routes: Routes = [
  {
    path: '',
    component: DrinksDashboardComponent,
    providers: [
      provideComponentStore(DrinkStoreService),
      DrinkDashboardService,
    ],
    children: [
      {
        path: '',
        component: DrinksGridComponent,
        resolve: { data: drinksListResolver },
      },
      {
        path: 'detail/:id',
        component: DrinksDetailsComponent,
        resolve: { data: selectedDrinkResolver },
      },
    ],
  },
];
