import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaginatedData } from '../../../core/models/paginatedData';
import { FilterData } from '../../../core/models/filterData';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.css']
})
export class TableHeaderComponent implements OnInit {

  @Input() data: PaginatedData;
  @Input() filterData: FilterData; 
  @Input() datasetName: string;
  @Output() onSortDataBy = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sortDataBy(sortBy: string) {
    this.onSortDataBy.emit(sortBy);
  }

}
