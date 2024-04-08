import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DrinkDashboardService } from '../service/dashboard/drink.dashboard.service';
import { asyncScheduler, first, observeOn, switchMap } from 'rxjs';

export const drinksListResolver: ResolveFn<Object> = (route, state) => {
  const drinksService = inject(DrinkDashboardService);
  return drinksService.getInitAllDrinks();
};

export const selectedDrinkResolver: ResolveFn<Object> = (route, state) => {
  const id = route.paramMap.get('id') || '';
  const drinksService = inject(DrinkDashboardService);

  return drinksService.getDrinkById(id);
};
