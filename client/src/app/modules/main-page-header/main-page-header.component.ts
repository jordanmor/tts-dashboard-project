import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.css']
})
export class MainPageHeaderComponent implements OnInit {

  show: boolean = false;
  alertType: string = 'success';
  @Input() datasetTitle: string;
  @Input() datasetName: string;
  @Input() totalDataItems: number;
  @Output() onModalFormSubmit = new EventEmitter();
  filterOn: boolean;

  constructor() { }

  ngOnInit() {
  }

  hideAlert() {
    this.show = false;
  }

  openModal() {
    this.onModalFormSubmit.emit();
  }
}
