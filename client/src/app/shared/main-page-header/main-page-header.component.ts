import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProductFormComponent } from '../../modules/products/modal-product-form/modal-product-form.component';

@Component({
  selector: 'app-main-page-header',
  templateUrl: './main-page-header.component.html',
  styleUrls: ['./main-page-header.component.css']
})
export class MainPageHeaderComponent implements OnInit {

  show: boolean = false;
  alertType: string = 'success';
  @Input() datasetTitle: string;

  constructor(public modalService: NgbModal) { }

  ngOnInit() {
  }

  hideAlert() {
    this.show = false;
  }

  openModal() {
    const modalRef = this.modalService.open(ModalProductFormComponent);
    // modalRef.result.then((result) => {
    //   console.log(result);
    // }).catch((error) => {
    //   console.log(error);
    // });
  }

}
