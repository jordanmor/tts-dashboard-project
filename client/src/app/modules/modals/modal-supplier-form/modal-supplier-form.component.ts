import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modal-supplier-form',
  templateUrl: './modal-supplier-form.component.html',
  styleUrls: ['./modal-supplier-form.component.css']
})
export class ModalSupplierFormComponent implements OnInit {

  @Input() id: number;
  myForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      name: ''
    });
  }
  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

}
