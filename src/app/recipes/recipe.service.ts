import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({providedIn: 'root'})
export class RecipeService{

    private recipes:Recipe[] = [
        new Recipe(
            'Test Recipe',
            'Simple Recipe',
            '../../../assets/img/recipe1.jpg',
            [
                new ingredient('leaf',1),
                new ingredient('red',23)
            ]),
        new Recipe(
            'Test Recipe 2',
            'Simple Recipe 2',
            '../../../assets/img/recipe2.jpg',
            [
                new ingredient('blue', 13),
                new ingredient('yellow',4)
            ])
    ];

    constructor(private slService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredient:ingredient[]){
        this.slService.addIngredients(ingredient);
    }
}