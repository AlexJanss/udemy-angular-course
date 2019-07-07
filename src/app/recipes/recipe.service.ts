import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
   private recipes : Recipe[]=[
        new Recipe('A Test Recipe',
            'This is simply test',
            'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg',
            [
                new Ingredient('Lettuce', 1),
                new Ingredient('Oranges', 6),
            ]),
        new Recipe('A Test Recipe',
            'This is simply test',
            'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg',
            [
                new Ingredient('Falafel', 12),
                new Ingredient('Garlic', 1),
            ]),
    ];

getRecipes(){
    // return a copy of the recipes array
    return this.recipes.slice();
}
}