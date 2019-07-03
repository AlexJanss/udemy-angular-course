import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[]=[
      new Recipe('A Test Recipe', 'This is simply test', 'https://get.pxhere.com/photo/dish-meal-food-vegetable-recipe-cuisine-vegetarian-food-parmigiana-1417897.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe : Recipe){

    this.recipeWasSelected.emit(recipe);

  }

}
