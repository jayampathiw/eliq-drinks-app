import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { ConfigurationService } from '../../../configuration/service/configuration.service';
import { DrinkDTO, DrinkResponse } from '../../model/drink.model';

@Injectable({
  providedIn: 'root',
})
export class DrinkHttpService {
  constructor(
    private httpClient: HttpClient,
    private configService: ConfigurationService
  ) {}

  getDrinks(): Observable<DrinkDTO[]> {
    return this.httpClient
      .get<DrinkResponse>(
        `${this.configService.getBaseAPIUrl()}/filter.php?a=Alcoholic`
      )
      .pipe(map((response: DrinkResponse) => response.drinks));
  }

  getDrinksById(id: string): Observable<DrinkDTO[]> {
    return this.httpClient
      .get<DrinkResponse>(
        `${this.configService.getBaseAPIUrl()}/lookup.php?i=${id}`
      )
      .pipe(map((response: DrinkResponse) => response.drinks));
  }
}
