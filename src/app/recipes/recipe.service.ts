import {Recipe} from "./recipe.model";

export class RecipeService{
   private recipes : Recipe[]=[
        new Recipe('A Test Recipe', 'This is simply test', 'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg'),
        new Recipe('A Test Recipe', 'This is simply test', 'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg'),
    ];

getRecipes(){
    // return a copy of the recipes array
    return this.recipes.slice();
}
}