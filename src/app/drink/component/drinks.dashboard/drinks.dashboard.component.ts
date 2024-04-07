import { Component, OnInit } from '@angular/core';
import { DrinkHttpService } from '../../service/http/drink.http.service';

@Component({
  selector: 'app-drinks.dashboard',
  standalone: true,
  imports: [],
  templateUrl: './drinks.dashboard.component.html',
  styleUrl: './drinks.dashboard.component.css',
})
export class DrinksDashboardComponent implements OnInit {
  constructor(public http: DrinkHttpService) {}

  ngOnInit(): void {
    this.http
      .getDrinks()
      .subscribe((drinks) =>
        console.log('drinks >>>>>>>>>>>>>>>>>>>>>> ', drinks)
      );
  }
}
