import { Component} from '@angular/core';
import { DatasetTitle } from 'src/app/core/models/datasetTitle';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent  {

  datasetName: string = 'suppliers';
  datasetTitle: DatasetTitle = new DatasetTitle("Supplier", "Suppliers");

  constructor() { }

}
