import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ConfigurationService } from '../../../configuration/service/configuration.service';
import { Drink, DrinkResponse } from '../../model/drink.model';

@Injectable({
  providedIn: 'root',
})
export class DrinkHttpService {
  constructor(
    private httpClient: HttpClient,
    private configService: ConfigurationService
  ) {}

  getDrinks(): Observable<Drink[]> {
    return this.httpClient
      .get<DrinkResponse>(this.configService.getBaseAPIUrl())
      .pipe(map((response: DrinkResponse) => response.drinks));
  }
}
