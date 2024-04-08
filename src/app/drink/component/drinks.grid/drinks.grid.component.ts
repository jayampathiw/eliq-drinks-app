import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  WritableSignal,
  signal,
} from '@angular/core';
import { DrinkViewModel } from '../../model/drink.model';
import { DrinksItemComponent } from './drinks.item/drinks.item.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-drinks-grid',
  standalone: true,
  templateUrl: './drinks.grid.component.html',
  styleUrl: './drinks.grid.component.css',
  imports: [DrinksItemComponent, NgFor, AsyncPipe],
})
export class DrinksGridComponent implements OnInit {
  allDrinks$: WritableSignal<DrinkViewModel[]> = signal([]);

  @Output() selectedDrink = new EventEmitter<string>();

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((res) => {
      this.allDrinks$.set(res['data']);
    });
  }

  setSelectedDrink(id: string): void {
    this.router.navigate([`/detail/${id}`]);
  }
}
