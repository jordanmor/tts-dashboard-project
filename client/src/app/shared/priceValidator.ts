import { FormGroup, ValidatorFn, Validators } from '@angular/forms';

export function ValidatePrice(fg: FormGroup): ValidatorFn {
  const fullPrice = fg.get('fullPrice').value;
  const salePrice = fg.get('salePrice').value;
  if(salePrice > fullPrice || fullPrice < salePrice) {
    fg.controls['salePrice'].setErrors({'invalid': true});
  } else {
    return null;
  }
  return null;
};