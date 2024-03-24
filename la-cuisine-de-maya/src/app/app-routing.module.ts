import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './containers/recipe-details/recipe-details.component';
import { ListCardsRecipeComponent } from './containers/list-cards-recipe/list-cards-recipe.component';

const routes: Routes = [
  { path: 'recipes', component: ListCardsRecipeComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
