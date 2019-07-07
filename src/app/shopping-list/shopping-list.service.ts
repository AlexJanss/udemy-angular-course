import {Ingredient} from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient('Onions', 23),
        new Ingredient('Aspargus', 3),
    ];

    getIngredients() {
        return this.ingredients;
    }
}