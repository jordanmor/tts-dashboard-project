import { Component} from '@angular/core';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent  {

  datasetName: string = 'suppliers';
  defaultField: string = 'supplierId';
  datasetTitle: object = {
    singular: "Supplier",
    plural: "Suppliers"
  }

  constructor() { }

}
