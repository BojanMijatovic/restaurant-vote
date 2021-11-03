import { Component } from '@angular/core';
// here  is imported module for represent a single restaurant.
import { Restaurant } from './restaurant/restaurant.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'restaurant-vote';

  /*
  A good practice when writing Angular code is to try to isolate the data structures
  we are using from the component code. To do this, let’s create a data structure that
  represents a single restaurant.
  */

  /*
  We’re saying here that restaurants is an
  Array of Restaurants. That is, the Array is a collection that
  will only hold objects of type Restaurant.
  */
  restaurants: Restaurant[];

  constructor() {
    this.restaurants = [];
  }
  /*
    title  address and description 
    are objects of type HTMLInputElement and not the input values directly.
  */
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

    /*
    return a boolean value of false (tells the browser
    not to propagate the event upwards

    for forms  e.preventDefault()
    */
    return false;
  }

  sortRestaurants(): Restaurant[] {
    return this.restaurants.sort((a, b) => b.votes - a.votes);
  }
}

/*
This is simple application to vote for restaurants. 

Here is the list of features:
  - Add new restaurants
  - Vote for restaurants
  - Sort restaurants by votes


  I was using the model class to create a new restaurant object.
  Design is simple :) 

*/
