import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/core/models/category';
import { Supplier } from 'src/app/core/models/supplier';
import { FilterData } from 'src/app/core/models/filterData';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input() datasetName: string;
  @Input() categories: Category[];
  @Input() suppliers: Supplier[];
  @Output() onFilteredRequest = new EventEmitter();
  filterOn: boolean = false;
  filterBy: string;
  filterByValue: any;
  filterAlsoBy: string;
  filterAlsoByValue: any;
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createFilterForm();
   }

  ngOnInit() {
    this.resetFilter();
  }

    // ------- FILTER TOGGLE ------- //

    toggleFilter() {
      this.filterOn = !this.filterOn; // toggle filter
      this.createFilterRequest();
    }

  // ------- FILTER REQUEST ------- //

  setFilterData() {
    this.filterBy = this.filterForm.get('filterBy').value;
    this.filterByValue = this.filterForm.get('filterByValue').value;
    this.filterAlsoByValue = this.filterForm.get('filterAlsoByValue').value;
    this.filterAlsoBy = this.filterForm.get('filterAlsoBy').value;
    // Handles submission of filter with availability pre-checked
    if(this.filterBy === 'availability' && this.filterByValue === '') {
      this.filterByValue = true;
    }
    // Handles submission of filter with availability pre-checked
    if(this.filterAlsoBy === 'availability' && this.filterAlsoByValue === '') {
      this.filterAlsoByValue = true;
    }
  }

  createFilterRequest() {
    let filterData: FilterData = new FilterData();
    filterData.filtered = this.filterOn;
    if(!this.filterOn) {
      this.resetFilter();
      this.createFilterForm();
      this.sendFilteredRequest(filterData);
    } else {
      this.setFilterData();
      filterData.filterBy = `${this.filterBy}+${this.filterByValue}`;
      filterData.filterAlsoBy = this.filterAlsoByValue === '' ? this.filterAlsoBy : `${this.filterAlsoBy}+${this.filterAlsoByValue}`;
      filterData.filterName1 = this.filterBy;
      filterData.filterName2 = this.filterAlsoBy;
      this.sendFilteredRequest(filterData);
    }
  }

  sendFilteredRequest(filterData: any) {
    this.onFilteredRequest.emit(filterData);
  }

  // -------- FILTER FORM --------- //

  createFilterForm() {
    this.filterForm = this.formBuilder.group({
      filterBy: '',
      filterByValue: '',
      filterAlsoBy: 'none',
      filterAlsoByValue: ''
    });
  }

  updateFilterFormValues() {
    const newFormData = {
      filterBy: this.filterBy,
      filterByValue: this.filterByValue,
      filterAlsoBy: this.filterAlsoBy,
      filterAlsoByValue: this.filterAlsoByValue
    }
    this.filterForm.patchValue(newFormData);
  }

  // -- SET FILTERS AND FILTER VALUES  -- //

  setFilterBy($event: any) {
    this.resetFilter();
    this.filterBy = $event.target.value;

    if(this.filterOn) {
      if(this.filterBy === 'availability') {
        this.filterByValue = true;
        this.updateFilterFormValues();
        this.createFilterRequest();
      }
    }
  }

  setFilterByValue($event: any) {
    this.filterByValue = $event.target.value;
    if(this.filterOn) {
      this.createFilterRequest();
    }
  }

  setFilterAlsoBy($event: any) {
    this.filterAlsoBy = $event.target.value;
    this.filterAlsoByValue = '';
    if(this.filterOn) {
      if(this.filterAlsoBy === 'availability') {
        this.filterAlsoByValue = true;
        this.updateFilterFormValues();
        this.createFilterRequest();
      } else if(this.filterAlsoBy === 'none')
          this.updateFilterFormValues();
          this.createFilterRequest();
    }
  }

  setFilterAlsoByValue($event: any) {
    this.filterAlsoByValue = $event.target.value;
    if(this.filterOn) {
      this.createFilterRequest();
    }
  }

  resetFilter() {
    this.filterBy = '';
    this.filterByValue = '';
    this.filterAlsoBy = 'none';
    this.filterAlsoByValue = '';
  }

}
