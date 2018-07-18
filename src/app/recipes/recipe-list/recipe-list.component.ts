import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('Test Recipe', 'Simple Recipe', 'https://pixabay.com/get/ea34b20d21f3023ed1584d05fb0938c9bd22ffd41cb2104894f6c878af/strawberry-3132973_1280.jpg'),
    new Recipe('Test Recipe', 'Simple Recipe', 'https://pixabay.com/get/ea34b20d21f3023ed1584d05fb0938c9bd22ffd41cb2104894f6c878af/strawberry-3132973_1280.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
