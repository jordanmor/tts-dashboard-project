import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalProductFormComponent } from './../modal-product-form/modal-product-form.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  show: boolean = false;
  alertType: string = 'success';

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
