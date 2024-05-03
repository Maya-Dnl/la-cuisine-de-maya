import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipes.service';
import { RecipeDetailsVM } from './recipe-details.viewmodel';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})

export class RecipeDetailsComponent {

  public Recipe: RecipeDetailsVM | undefined;

  ngOnInit() {
    //   let recipeData = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.recipeService.GetRecipe(params.get('id')!))
    // );

    const id = this.route.snapshot.paramMap.get('id')!;
    let recipeData = this.recipeService.GetRecipe(+id);

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
  

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
    private router: Router) {

    // let recipeData = recipeService.GetRecipe();
  }
}
