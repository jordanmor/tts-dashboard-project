import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Data } from 'src/app/core/models/data';
import { PaginatedRequest } from '../../core/models/paginatedRequest';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProductFormComponent } from '../modals/modal-product-form/modal-product-form.component';
import { ModalCategoryFormComponent } from '../modals/modal-category-form/modal-category-form.component';
import { ModalSupplierFormComponent } from '../modals/modal-supplier-form/modal-supplier-form.component';
import { FilterData } from '../../core/models/filterData';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() datasetName: string;
  @Input() datasetTitle: object;
  data: Data = new Data();

  constructor(
    private dataService: DataService, 
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.showData(this.createPaginatedRequest(this.data));
    this.dataService.getAllCategories().subscribe(categories => this.data.categories = categories);
    this.dataService.getAllSuppliers().subscribe(suppliers => {
      this.data.suppliers = suppliers;
    });
  }

  // Handle pagination
  handlePageChange(page: number) {
    this.data.paginatedData.currentPage = page;
    this.showData(this.createPaginatedRequest(this.data));
  }

  handleRemoveItem(id: number) {
    this.dataService.removeItem(id, this.datasetName).subscribe(res => {
      this.showData(this.createPaginatedRequest(this.data));
    });
  }

  handleUpdateDataItem(dataItem: any) {
    this.dataService.updateData(dataItem, this.datasetName).subscribe(res => {
      this.showData(this.createPaginatedRequest(this.data));
    });
  }

  handleSortDataBy(sortBy: string) {
    this.data.paginatedData.isSortDirectionAsc = !this.data.paginatedData.isSortDirectionAsc;
    this.data.paginatedData.sortBy = sortBy;
    this.data.paginatedData.sortByDiscount = sortBy === 'discount' ? true : false;
    this.data.paginatedData.currentPage = 1;
    this.showData(this.createPaginatedRequest(this.data));
  }

  // Populate paginated data
  showData(paginatedRequest: PaginatedRequest) {
    this.dataService.getPaginatedData(paginatedRequest).subscribe(response => {
      this.data.paginatedData.dataset = response.content;
      this.data.paginatedData.currentPage = response.number + 1;  // page numbers from server start at 0 
      this.data.paginatedData.totalElements = response.totalElements;
      this.data.paginatedData.pageSize = response.size;
    });
  }

  handleFilteredRequest(filterData: FilterData) {
    if(!filterData.filtered) {
      // Reset sort and current page
      this.data.paginatedData.isSortDirectionAsc = true;
      this.data.paginatedData.sortBy = 'id';
      this.data.paginatedData.currentPage = 1;
    }
    this.data.filterData.filtered = filterData.filtered;
    this.data.filterData.filterBy = filterData.filterBy;
    this.data.filterData.filterAlsoBy = filterData.filterAlsoBy;
    this.data.filterData.filterName1 = filterData.filterName1;
    this.data.filterData.filterName2 = filterData.filterName2;
    this.showData(this.createPaginatedRequest(this.data));
  }

  createPaginatedRequest(data: Data): PaginatedRequest {
    const { filtered } = data.filterData
    const { currentPage, pageSize, isSortDirectionAsc, sortBy, sortByDiscount } = data.paginatedData;
    let sortDirection = isSortDirectionAsc ? 'ASC' : 'DESC';
    if(filtered) {
      const { filterBy, filterAlsoBy } = data.filterData;
      return new PaginatedRequest(this.datasetName, currentPage, pageSize, sortDirection, sortBy, sortByDiscount, filtered, filterBy, filterAlsoBy);
    }
    return new PaginatedRequest(this.datasetName, currentPage, pageSize, sortDirection, sortBy, sortByDiscount);
  }

  handleModalFormSubmit() {
    let modalRef: any;
    if(this.datasetName === 'products') {
      modalRef = this.modalService.open(ModalProductFormComponent);
      modalRef.componentInstance.categories = this.data.categories;
      modalRef.componentInstance.suppliers = this.data.suppliers;
      modalRef.componentInstance.id = 1;
    } else if(this.datasetName === 'categories') {
      modalRef = this.modalService.open(ModalCategoryFormComponent);
      modalRef.componentInstance.id = 2;
    } else if(this.datasetName === 'suppliers') {
      modalRef = this.modalService.open(ModalSupplierFormComponent);
      modalRef.componentInstance.id = 3;
    }
    modalRef.result.then((result: any) => {
      this.dataService.createItem(result, this.datasetName).subscribe(res => {
        this.showData(this.createPaginatedRequest(this.data));
      });
    }).catch((error) => {
      // console.log(error);
    });
  }

  choosePageSize(pageSize: number) {
    this.data.paginatedData.pageSize = pageSize;
    this.data.paginatedData.currentPage = 1;
    this.showData(this.createPaginatedRequest(this.data));
  }
}
