export interface DrinkDTO {
  idDrink: string; // All fields optional now
  strDrink?: string;
  strDrinkAlternate?: string | null;
  strTags?: string | null;
  strVideo?: string | null;
  strCategory?: string;
  strIBA?: string | null;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string | null;
  strDrinkThumb?: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strImageSource?: string | null;
  strImageAttribution?: string | null;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
}

export interface DrinkViewModel {
  idDrink: string;
  strDrink?: string;
  strDrinkAlternate?: string | null;
  strTags?: string | null;
  strVideo?: string | null;
  strCategory?: string;
  strIBA?: string | null;
  strAlcoholic?: string;
  strGlass?: string;
  strInstructions?: string | null;
  strDrinkThumb?: string;
  strIngredients?: Array<string>;
  strMeasures?: Array<string>;
  strImageSource?: string | null;
  strImageAttribution?: string | null;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
  dataLoadedStatus?: boolean;
}

export interface DrinkResponse {
  drinks: DrinkDTO[];
}
