import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root',
})
export class DataStorageService{
    constructor(private httpClient:HttpClient, private recipeService:RecipeService, private authService:AuthService){}

    storeData(){
        const token = this.authService.getToken();
        return this.httpClient.put('https://ng-recipe-book-22a6f.firebaseio.com/recipes.json?auth='+token, this.recipeService.getRecipes());
    }

    getStoredData(){
        const token = this.authService.getToken();
        // console.log(token);
        this.httpClient.get('https://ng-recipe-book-22a6f.firebaseio.com/recipes.json?auth='+token, {observe:'response', responseType:'json'})
        .pipe(map(
            (recipes:Recipe[]) => {
                console.log(recipes);
                for(let recipe of recipes){
                    if (! recipe['ingredients']) {
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
                // return [];
            }
        ))
        .subscribe(
            (recipe:Recipe[])=>{
                this.recipeService.setRecipe(recipe);
            }
        );
    }
}