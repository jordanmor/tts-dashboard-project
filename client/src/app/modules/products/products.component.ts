import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  datasetName: string = 'products';
  datasetTitle: object = {
    singular: "Product",
    plural: "Products"
  }

  constructor() { }

}