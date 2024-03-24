import recipesData from "../data/recipes.json";

export class RecipeService {
  constructor() {
    
  }
  
  public GetRecipe(id: number) 
  {
    return recipesData.recipes.find(x => x.id == id);
  }
}

// methodes pour aller chercher les recettes