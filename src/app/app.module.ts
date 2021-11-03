import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListRestaurantsComponent } from './list-restaurants/list-restaurants.component';

@NgModule({
  declarations: [
    AppComponent,
    ListRestaurantsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
