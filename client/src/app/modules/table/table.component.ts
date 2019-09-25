import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() datasetName: string;
  @Input() currentPage: number;
  @Input() dataset: any[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }

  sortDataBy(productField: string) {
    this.dataService.sortDataBy(productField, this.currentPage, this.datasetName);
  }

}
