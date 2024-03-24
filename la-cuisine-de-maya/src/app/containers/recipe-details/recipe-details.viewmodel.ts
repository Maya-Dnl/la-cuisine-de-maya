export interface RecipeDetailsVM {
  Title: string;
  //Image:
  Ingredients: string[];
  Ustensils: string[];
  Steps: {
    name: string;
    step: string[];
  }[]
}