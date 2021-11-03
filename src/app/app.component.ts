import { Component } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant-vote';

  restaurants: Restaurant[];

  constructor() {
    this.restaurants = [];
  }
  addRestaurant(
    name: HTMLInputElement,
    description: HTMLInputElement,
    address: HTMLInputElement
  ) {
    this.restaurants.push(
      new Restaurant(name.value, address.value, description.value, 0)
    );
    name.value = '';
    description.value = '';
    address.value = '';
    console.log(this.restaurants);

    return false;
  }

  sortRestaurants(): Restaurant[] {
    return this.restaurants.sort((a, b) => b.votes - a.votes);
  }
}
