import { Component, Input, numberAttribute, booleanAttribute } from '@angular/core';
import { RecipeService } from '../../services/recipes.service';
import { CardRecipeVM } from './card-recipe.viewmodel';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrl: './card-recipe.component.scss'
})


export class CardRecipeComponent {

  @Input({ required: true }) Recipe!: CardRecipeVM;
  
 }

// export class CardRecipeComponent implements OnInit {

//   public recipes: CardRecipeVM[] = []; // Tableau pour stocker toutes les recettes

//   constructor(private recipeService: RecipeService) { }

//   ngOnInit(): void {
//     this.loadRecipes(); // Appel de la fonction pour charger les recettes lors de l'initialisation du composant
//   }

//   loadRecipes() {
//     this.recipeService.GetRecipe(recipes.id)
//   }

//     this.Recipe = {
//     Title: recipeData.title,
//   }
// };