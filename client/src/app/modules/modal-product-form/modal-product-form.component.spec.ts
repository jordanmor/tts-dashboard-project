import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProductFormComponent } from './modal-product-form.component';

describe('ModalProductFormComponent', () => {
  let component: ModalProductFormComponent;
  let fixture: ComponentFixture<ModalProductFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProductFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalProductFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
