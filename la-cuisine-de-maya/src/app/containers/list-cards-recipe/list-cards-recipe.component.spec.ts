import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardsRecipeComponent } from './list-cards-recipe.component';

describe('ListCardsRecipeComponent', () => {
  let component: ListCardsRecipeComponent;
  let fixture: ComponentFixture<ListCardsRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCardsRecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCardsRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
