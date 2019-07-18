import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";


@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>();

   private recipes : Recipe[]=[
        new Recipe('A Salad',
            'Delicious salad',
            'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg',
            [
                new Ingredient('Lettuce', 1),
                new Ingredient('Oranges', 6),
            ]),
        new Recipe('Falafel Recipe',
            'Very nice falafel',
            'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg',
            [
                new Ingredient('Falafel', 12),
                new Ingredient('Garlic', 1),
            ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes(){
        // return a copy of the recipes array
        return this.recipes.slice();
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}