import { Injectable } from '@angular/core';
import { DrinkHttpService } from '../http/drink.http.service';
import { ConfigurationService } from '../../../configuration/service/configuration.service';
import { DrinkStoreService } from '../../state/drink.store';

@Injectable()
export class DrinkDashboardService {
  allDrinks$ = this.drinkStore.allDrinks$;
  constructor(
    private drinkStore: DrinkStoreService,
    private configService: ConfigurationService
  ) {}
}
