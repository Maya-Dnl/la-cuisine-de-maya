export interface RecipeDetailsVM {
  Title: string;
  ImageURL: string;
  Ingredients: string[];
  Ustensils: string[];
  Steps: {
    name: string;
    step: string[];
  }[]
}