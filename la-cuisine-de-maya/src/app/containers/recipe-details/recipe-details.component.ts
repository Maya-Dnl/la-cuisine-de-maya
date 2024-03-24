import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipes.service';
import { RecipeDetailsVM } from './recipe-details.viewmodel';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})

export class RecipeDetailsComponent {

  public Recipe: RecipeDetailsVM;

  constructor(private recipeService: RecipeService) {
    let recipeData = recipeService.GetRecipe(1);

    if (recipeData == null) {
      throw "recipe data is null";
    }

    this.Recipe = {
      Title: recipeData.title,
      ImageURL: recipeData.imageURL,
      Ingredients: recipeData.ingredients,
      Ustensils: recipeData.ustensils,
      Steps: recipeData.steps
    }
  }
}
