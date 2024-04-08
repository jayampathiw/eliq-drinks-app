import { Injectable } from '@angular/core';
import { ConfigurationService } from '../../../configuration/service/configuration.service';
import { DrinkStoreService } from '../../state/drink.store';
import {
  asyncScheduler,
  first,
  iif,
  map,
  observeOn,
  of,
  switchMap,
  tap,
} from 'rxjs';

@Injectable()
export class DrinkDashboardService {
  allDrinks$ = this.drinkStore.allDrinks$;
  loadingStatus$ = this.drinkStore.loadingStatus$;
  selectedDrink$ = this.drinkStore.selectedDrink$;

  constructor(
    private drinkStore: DrinkStoreService,
    private configService: ConfigurationService
  ) {}

  getDrinkById(drinkId: string) {
    const getSelectedDrink$ = this.loadingStatus$.pipe(
      observeOn(asyncScheduler),
      first((f) => !f),
      switchMap(() => this.selectedDrink$)
    );

    return this.allDrinks$.pipe(
      first(() => drinkId?.trim()?.length > 0),
      map((drinks) => drinks.find((drink) => drink.idDrink == drinkId)),
      first((d) => d != null),
      tap((d) => {
        if (d != null && !d?.dataLoadedStatus) {
          this.drinkStore.setLoadingStatus(true);
          this.loadDrinkingData(d.idDrink);
        }
      }),
      switchMap((data) =>
        iif(() => Boolean(data?.dataLoadedStatus), of(data), getSelectedDrink$)
      )
    );
  }

  loadDrinkingData(drinkId: string): void {
    this.drinkStore.getDrinkById(drinkId);
  }
}
