import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
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

    getRecipes(){
        // return a copy of the recipes array
        return this.recipes.slice();
    }
}