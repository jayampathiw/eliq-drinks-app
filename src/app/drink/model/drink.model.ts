export interface Drink {
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
  strIngredients?: Array<string>;
  strMeasures?: Array<string>;
  strImageSource?: string | null;
  strImageAttribution?: string | null;
  strCreativeCommonsConfirmed?: string;
  dateModified?: string;
}

export interface DrinkResponse {
  drinks: Drink[];
}
