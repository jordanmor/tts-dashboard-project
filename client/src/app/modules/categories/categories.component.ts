import { Component } from '@angular/core';
import { DatasetTitle } from 'src/app/core/models/datasetTitle';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  datasetName: string = 'categories';
  datasetTitle: DatasetTitle = new DatasetTitle("Category", "Categories");

  constructor() { }

}
