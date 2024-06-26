import { Injectable, OnDestroy } from '@angular/core';
import { DrinkDTO, DrinkViewModel } from '../model/drink.model';
import { ComponentStore, OnStoreInit } from '@ngrx/component-store';
import { DrinkHttpService } from '../service/http/drink.http.service';
import { ConfigurationService } from '../../configuration/service/configuration.service';
import {
  EMPTY,
  Observable,
  Subscription,
  catchError,
  combineLatest,
  map,
  of,
  switchMap,
} from 'rxjs';

export interface DrinkState {
  loadingStatus: boolean;
  drinks: DrinkViewModel[];
  selectedDrink: DrinkViewModel | null;
}

const initialDrinksState: DrinkState = {
  loadingStatus: false,
  drinks: [],
  selectedDrink: null,
};

@Injectable()
export class DrinkStoreService
  extends ComponentStore<DrinkState>
  implements OnStoreInit, OnDestroy
{
  dataLoadingSubscription!: Subscription;

  allDrinks$ = this.select((state) => state.drinks);
  loadingStatus$ = this.select((state) => state.loadingStatus);
  selectedDrink$ = this.select((state) => state.selectedDrink);

  constructor(
    private drinkHttpService: DrinkHttpService,
    private configService: ConfigurationService
  ) {
    super(initialDrinksState);
  }

  ngrxOnStoreInit() {
    this.setLoadingStatus(true);
    this.dataLoadingSubscription = this.drinkHttpService
      .getDrinks()
      .pipe(
        map((drinks) =>
          drinks.map((drink) => this.convertDrinkDTOToViewModel(drink))
        )
      )
      .subscribe((drinks) =>
        this.setState({ loadingStatus: false, selectedDrink: null, drinks })
      );
  }

  getDrinkById = this.effect((id$: Observable<string>) => {
    return id$.pipe(
      switchMap((id) => {
        return this.drinkHttpService.getDrinksById(id).pipe(
          map((drinks) =>
            drinks.map((drink) => this.convertDrinkDTOToViewModel(drink, true))
          ),
          switchMap((drink) => {
            const selectedDrink = drink;

            this.setState((state) => {
              const index = state?.drinks.findIndex(
                (d) => d.idDrink == selectedDrink[0].idDrink
              );
              const newDrinkList = [...state?.drinks];
              newDrinkList[index] = selectedDrink[0];

              return {
                ...state,
                drinks: newDrinkList,
                selectedDrink: selectedDrink[0],
                loadingStatus: false,
              };
            });
            return of(drink);
          }),
          catchError(() => {
            this.setLoadingStatus(false);
            return EMPTY;
          })
        );
      })
    );
  });

  // getDrinkById = this.effect((id: string) => {
  //   const selectedDrink$ = this.drinkHttpService
  //     .getDrinksById(id)
  //     .pipe(
  //       map((drinks) =>
  //         drinks.map((drink) => this.convertDrinkDTOToViewModel(drink))
  //       )
  //     );
  //   const allDrinks$ = this.select((state) => state.drinks);
  //   return combineLatest([selectedDrink$, allDrinks$]).pipe(
  //     switchMap(([selectedDrink, allDrinks]) => {
  //       this.setState({
  //         loadingStatus: false,
  //         selectedDrink: selectedDrink[0],
  //         drinks: allDrinks,
  //       });
  //       return of(selectedDrink);
  //     }),
  //     catchError(() => EMPTY)
  //   );
  // });

  readonly setLoadingStatus = this.updater((state, status: boolean) => ({
    ...state,
    loadingStatus: status,
  }));

  override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.dataLoadingSubscription?.unsubscribe();
  }

  private convertDrinkDTOToViewModel(
    dto: DrinkDTO,
    dataLoadedStatus?: boolean
  ): DrinkViewModel {
    const ingredients: string[] = [];
    const measures: string[] = [];

    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}` as keyof DrinkDTO;
      const measureKey = `strMeasure${i}` as keyof DrinkDTO;

      const ingredient = dto[ingredientKey];
      const measure = dto[measureKey];

      if (ingredient) ingredients.push(ingredient);
      if (measure) measures.push(measure);
    }

    // Construct the View Model
    return {
      idDrink: dto.idDrink,
      strDrink: dto.strDrink,
      strDrinkAlternate: dto.strDrinkAlternate,
      strTags: dto.strTags,
      strVideo: dto.strVideo,
      strCategory: dto.strCategory,
      strIBA: dto.strIBA,
      strAlcoholic: dto.strAlcoholic,
      strGlass: dto.strGlass,
      strInstructions: dto.strInstructions,
      strDrinkThumb: dto.strDrinkThumb,
      strIngredients: ingredients,
      strMeasures: measures,
      strImageSource: dto.strImageSource,
      strImageAttribution: dto.strImageAttribution,
      strCreativeCommonsConfirmed: dto.strCreativeCommonsConfirmed,
      dateModified: dto.dateModified,
      dataLoadedStatus: dataLoadedStatus || false,
    };
  }
}
