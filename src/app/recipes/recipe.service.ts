import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService{ 
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
            new Recipe('A test recipe',
            'This is simply a test',
            'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('French fries',20)
            ]),
            new Recipe('A test recipe 2',
            'This is simply a test',
            'https://www.bbcgoodfood.com/sites/default/files/styles/carousel_medium/public/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
            [
                new Ingredient('Buns',2),
                new Ingredient('Meat',1)
            ])
        ];

    getRecipes() {
        return this.recipes.slice();
    }
}