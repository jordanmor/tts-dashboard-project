import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() onUpdateItem = new EventEmitter();
  @Output() onRemoveItem = new EventEmitter();
  @Output() onSortDataBy = new EventEmitter();
  selectedId: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    
  }

  sortDataBy(productField: string) {
    this.onSortDataBy.emit(productField);
  }

  updateItem(data: any) {
    this.onUpdateItem.emit(data);
  }

  removeItem(data: any) {
    this.selectedId = data.id;
    this.onRemoveItem.emit(data.id);
  }

}
