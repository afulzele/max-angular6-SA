import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient:ingredient[] = [];

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredient = this.shoppingListService.getShoppingList();
    this.shoppingListService.ingredientChanged
      .subscribe(
        (ingredients : ingredient[]) => {
          this.ingredient = ingredients;
        }
      )
  }

}
