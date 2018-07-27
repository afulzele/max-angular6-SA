import { ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    ingredientChanged = new Subject<ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients:ingredient[] = [
        new ingredient('Strawberry', 10),
        new ingredient('Blueberry', 40),
        new ingredient('Blackberry', 22),
        new ingredient('Curd', 30)
    ];

    getShoppingList(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        // console.log(this.ingredients);
        return this.ingredients[index];
    }

    addIngredient(ingredient:ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredient:ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number, newIngredient:ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}