import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './restaurant.model';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  @Input()
  restaurant!: Restaurant;

  constructor() {}

  voteUp(): boolean {
    this.restaurant.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.restaurant.voteDown();
    return false;
  }

  ngOnInit(): void {}
}
