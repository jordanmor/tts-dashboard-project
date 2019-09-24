import { Component} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-product-form',
  templateUrl: './modal-product-form.component.html',
  styleUrls: ['./modal-product-form.component.css']
})
export class ModalProductFormComponent {

  closeResult: string;

  constructor(private activeModal: NgbActiveModal) { }

}
