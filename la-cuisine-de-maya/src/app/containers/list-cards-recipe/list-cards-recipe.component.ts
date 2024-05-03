import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipes.service';
import { CardRecipeVM } from '../../components/card-recipe/card-recipe.viewmodel';
// import { RecipeDetailsVM } from '../recipe-details/recipe-details.viewmodel';


@Component({
  selector: 'app-list-cards-recipe',
  templateUrl: './list-cards-recipe.component.html',
  styleUrl: './list-cards-recipe.component.scss'
})

export class ListCardsRecipeComponent {

  public Recipes: CardRecipeVM[] = [];


  constructor(private recipeService: RecipeService) {
  
  }

  this.Recipes = recipesData.map(x =>
    <CardRecipeVM>{
      id: x.id,
      Title: x.title,
      ImageURL: x.imageURL,
      PreparationTime: x.preparationTime, 
      PriceLevel: x.priceLevel, 
      QuickDescription: x.quickDescription
    });
  }
}