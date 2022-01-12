import { Component } from '@angular/core';
import { menuItem } from './menuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PizzaShop';
  menuItems : menuItem[] = 
  [new menuItem("Pizza", "Main", 10.00, true), 
  new menuItem("Salad", "Side", 8.00, true),
  new menuItem("Pizza Soup", "Side", 7.25, false),
  new menuItem("Pizza Wings", "Main", 9.50, true),
  new menuItem("Pizza Punch", "Drink", 3.00, true),
  new menuItem("Pizza Puree", "Drink", 4.50, false)]

}
