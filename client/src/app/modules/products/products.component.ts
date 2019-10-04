import { Component } from '@angular/core';
import { DatasetTitle } from '../../core/models/datasetTitle';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  datasetName: string = 'products';
  datasetTitle: DatasetTitle = new DatasetTitle("Product", "Products");

  constructor() {}

}