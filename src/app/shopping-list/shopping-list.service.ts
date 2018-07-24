import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientChanged = new Subject<ingredient[]>();

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
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredient:ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}