import { Component, OnInit, OnDestroy } from '@angular/core';
import { ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredient:ingredient[] = [];

  private subscription:Subscription;

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.ingredient = this.shoppingListService.getShoppingList();
    this.subscription = this.shoppingListService.ingredientChanged
      .subscribe(
        (ingredients : ingredient[]) => {
          this.ingredient = ingredients;
        }
      )
  }

  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
