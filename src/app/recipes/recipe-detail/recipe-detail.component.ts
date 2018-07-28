import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  recipe:Recipe;
  id:number;
  subscription:Subscription;

  constructor(private recipeService:RecipeService, private route:ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );

      this.subscription = this.recipeService.recipesChanged.subscribe(
        (recipe:Recipe[])=>{
          this.router.navigate(['../'],{relativeTo:this.route});
        }
      );
  }

  onAddToTheShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredient)
  }

  onDeleteFromShoppingList(){
    this.recipeService.deleteRecipe(this.id);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
