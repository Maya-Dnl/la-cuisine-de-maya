import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import { ListCardsRecipeComponent } from './containers/list-cards-recipe/list-cards-recipe.component';
import { RecipeDetailsComponent } from './containers/recipe-details/recipe-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeService } from './services/recipes.service';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    NavBarComponent,
    SearchBarComponent,
    CardRecipeComponent,
    ListCardsRecipeComponent,
    RecipeDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [
    provideAnimationsAsync(),
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
