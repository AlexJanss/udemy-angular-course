import {Ingredient} from "../shared/ingredient.model";

import {Subject} from "rxjs";

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Onions', 23),
        new Ingredient('Aspargus', 3),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        //loop through ingredients, resulting in several event emittions
        // for (let ingredient of ingredients) {
        //   this.addIngredient(ingredient);
        // }
        //... spread operator
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}