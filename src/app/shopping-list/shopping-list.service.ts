import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Onions', 23),
        new Ingredient('Aspargus', 3),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        //loop through ingredients, resulting in several event emittions
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        //... spread operator
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}