import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Data } from 'src/app/core/models/data';
import { PaginatedRequest } from '../../core/models/paginatedRequest';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProductFormComponent } from '../../modules/products/modal-product-form/modal-product-form.component';
import { ModalCategoryFormComponent } from '../categories/modal-category-form/modal-category-form.component';
import { ModalSupplierFormComponent } from '../suppliers/modal-supplier-form/modal-supplier-form.component';

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
    this.data.datasetName = this.datasetName;
    this.showData(this.createPaginatedRequest(this.data));
  }

  // Handle pagination
  handlePageChange(page: number) {
    this.data.currentPage = page;
    this.showData(this.createPaginatedRequest(this.data));
  }

  handleRemoveItem(id: number) {
    this.dataService.removeItem(id, this.datasetName).subscribe(res => {
      this.showData(this.createPaginatedRequest(this.data));
    });
  }

  handleUpdateItem(dataItem: any) {
    this.dataService.updateData(dataItem, this.datasetName).subscribe(res => {
      this.showData(this.createPaginatedRequest(this.data));
    });
  }

  handleSortDataBy(sortBy: string) {
    this.data.isSortDirectionAsc = !this.data.isSortDirectionAsc;
    this.data.sortBy = sortBy;
    this.data.orderByDiscount = sortBy === 'discount' ? true : false;
    this.showData(this.createPaginatedRequest(this.data));
  }

  showData(paginatedRequest: PaginatedRequest) {
    this.dataService.getData(paginatedRequest).subscribe(response => {
      this.data.dataset = response.content;
      this.data.currentPage = response.number + 1;  // page numbers from server start at 0 
      this.data.totalElements = response.totalElements;
      this.data.pageSize = response.size;
    });
  }

  createPaginatedRequest(data: Data): PaginatedRequest {
    const {datasetName, currentPage, pageSize, isSortDirectionAsc, sortBy, orderByDiscount} = data;
    let sortDirection = isSortDirectionAsc ? 'ASC' : 'DESC';
    return new PaginatedRequest(datasetName, currentPage, pageSize, sortDirection, sortBy, orderByDiscount);
  }

  handleModalFormSubmit() {
    let modalRef: any;
    if(this.datasetName === 'products') {
      modalRef = this.modalService.open(ModalProductFormComponent);
      modalRef.componentInstance.id = 1;
    } else if(this.datasetName === 'categories') {
      modalRef = this.modalService.open(ModalCategoryFormComponent);
      modalRef.componentInstance.id = 2;
    } else if(this.datasetName === 'suppliers') {
      modalRef = this.modalService.open(ModalSupplierFormComponent);
      modalRef.componentInstance.id = 3;
    }
    modalRef.result.then((result: any) => {
      console.log(result);
      this.dataService.createItem(result, this.datasetName).subscribe(res => {
        this.showData(this.createPaginatedRequest(this.data));
      });
    }).catch((error) => {
      // console.log(error);
    });
  }
}
