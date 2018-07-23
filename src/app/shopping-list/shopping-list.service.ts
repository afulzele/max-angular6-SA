import { EventEmitter } from "@angular/core";
import { ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredientChanged = new EventEmitter<ingredient[]>();

    private ingredients:ingredient[] = [
        new ingredient('Strawberry', 10),
        new ingredient('Blueberry', 40),
        new ingredient('Blackberry', 22),
        new ingredient('Curd', 30)
    ];

    getShoppingList(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredient:ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());  
    }
}