import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DataStorageService{
    constructor(private http:Http, private recipeService:RecipeService){}

    storeData(){
        return this.http.put('https://ng-recipe-book-22a6f.firebaseio.com/recipes.json', this.recipeService.getRecipes());
    }

    getStoredData(){
        return this.http.get('https://ng-recipe-book-22a6f.firebaseio.com/recipes.json')
        .pipe(map((recipes: Recipe[]) => {
            return recipes.map((recipe) => {
                if (! recipe['ingredients']) {
                    recipe.ingredient = [];
                }
                return recipe;
            });
        }))
        .subscribe(
            (recipe:Recipe[])=>{
                this.recipeService.setRecipe(recipe);
            }
        );
    }
}