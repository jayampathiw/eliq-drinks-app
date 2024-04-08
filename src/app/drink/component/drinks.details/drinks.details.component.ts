import { Component, WritableSignal, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DrinkViewModel } from '../../model/drink.model';

@Component({
  selector: 'app-drinks-details',
  standalone: true,
  imports: [],
  templateUrl: './drinks.details.component.html',
  styleUrl: './drinks.details.component.css',
})
export class DrinksDetailsComponent {
  drink: WritableSignal<DrinkViewModel | null> = signal(null);

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((res) => {
      console.log('res >>>>>>>>>>>>>>> ', res);
      this.drink.set(res['data']);
    });
  }
}
