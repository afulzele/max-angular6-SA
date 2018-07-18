import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient:ingredient[] = [
    new ingredient('Strawberry', 10),
    new ingredient('Blueberry', 40),
    new ingredient('Blackberry', 22),
    new ingredient('Curd', 30)
  ];

  constructor() { }

  ngOnInit() {
  }

}
