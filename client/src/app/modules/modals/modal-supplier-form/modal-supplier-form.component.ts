import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-supplier-form',
  templateUrl: './modal-supplier-form.component.html',
  styleUrls: ['./modal-supplier-form.component.css']
})
export class ModalSupplierFormComponent implements OnInit {

  @Input() id: number;
  addSupplierForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.addSupplierForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }
  submitForm() {
    this.activeModal.close(this.addSupplierForm.value);
  }

}
