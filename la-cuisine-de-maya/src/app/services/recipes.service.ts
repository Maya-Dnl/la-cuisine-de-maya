import { BehaviorSubject, combineLatest, from, map, Observable, of } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import recipesData from "../data/recipes.json";

export class RecipeService {

// Supposons que recipesData.recipes contient vos données de recettes
public AllRecipes$ = of(recipesData.recipes);

// BehaviorSubject pour stocker le searchTerm actuel
public searchTerm$ = new BehaviorSubject<string>('');

// Observable pour le searchTerm
public searchTermObservable$: Observable<string> = this.searchTerm$.asObservable();

// Observable filtré basé sur le dernier searchTerm
public FilteredRecipes$ = combineLatest([this.AllRecipes$, this.searchTermObservable$]).pipe(
  switchMap(([recipes, searchTerm]) =>
    of(recipes.filter(recipe => recipe.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())))
  )
);




  // public RecipesData: Recipe[] = recipesData.recipes;


  constructor() {}

  // la search bar écrit dans le service Recipe le term rentré par le user
  public SetSearchTerm(searchTerm: string) {
    this.searchTerm$.next(searchTerm);
  }

  // récupérer dans le service Recipe la valeur de searchTerm
  public GetSearchTerm() {
    return this.searchTerm$.value;
  }

  //  Récupère une seule recette par son id
  public GetRecipe(id: number) {
    return recipesData.recipes.find(x => x.id == id);
  }

  // Récupère toutes les recettes
  public GetAllRecipes() {
    return recipesData.recipes;
  }

  // méthode qui renvoit toutes les recettes (GetAllRecipes) en appliquant un filtre sur le titre de la recipe
  // qui doit matcher (.match) avec le searchTerm récupéré
  // public GetFilteredRecipes() {
  //   return of(this.GetAllRecipes().filter(recipe => recipe.title.toLocaleLowerCase().match(this.searchTerm)))
  // }

  
}

// methodes pour aller chercher les recettes