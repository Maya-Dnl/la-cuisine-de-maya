import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipes.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})

export class SearchBarComponent implements OnInit {

  searchTerm: string = "";

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.searchTerm = this.recipeService.GetSearchTerm();
  }

  SearchOnClick() {
    this.recipeService.SetSearchTerm(this.searchTerm);
  }

}
