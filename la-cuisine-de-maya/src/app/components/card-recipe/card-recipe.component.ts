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