import { Component, input } from '@angular/core';
import { DrinkViewModel } from '../../model/drink.model';

@Component({
  selector: 'app-drinks-item',
  standalone: true,
  imports: [],
  templateUrl: './drinks.item.component.html',
  styleUrl: './drinks.item.component.css',
})
export class DrinksItemComponent {
  drinkItem = input.required<DrinkViewModel>();
}
