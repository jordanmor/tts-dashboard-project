import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  datasetName: string = 'categories';
  defaultField: string = 'categoryId';
  datasetTitle: object = {
    singular: "Category",
    plural: "Categories"
  }

  constructor() { }

}
