import { Component } from '@angular/core';

@Component({
  selector: 'app-list-cards-recipe',
  templateUrl: './list-cards-recipe.component.html',
  styleUrl: './list-cards-recipe.component.scss'
})
export class ListCardsRecipeComponent {
  items = [
    { title: 'Purée de Potimarron, Champignons et Buratta', content: 'Contenu de la carte 1' },
    { title: 'Titre de la carte 2', content: 'Contenu de la carte 2' },
    { title: 'Titre de la carte 3', content: 'Contenu de la carte 3' },
    { title: 'Titre de la carte 4', content: 'Contenu de la carte 4' },
    { title: 'Titre de la carte 5', content: 'Contenu de la carte 5' },
    { title: 'Titre de la carte 6', content: 'Contenu de la carte 6' },
    { title: 'Titre de la carte 7', content: 'Contenu de la carte 7' },
    { title: 'Titre de la carte 8', content: 'Contenu de la carte 8' },
    { title: 'Titre de la carte 9', content: 'Contenu de la carte 9' },
    { title: 'Titre de la carte 10', content: 'Contenu de la carte 10' },
  ];
}
