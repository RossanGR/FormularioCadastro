import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['./form-field-overview-example.css']
})

export class FormComponent implements OnInit {
 
  public formData!: FormGroup;
  public phoneMask = ['(',/\d/,/\d/,')',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
  public cpfMask = [/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,'-',/\d/,/\d/];
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      name: ['',[Validators.required]],
      cpf: ['',[Validators.required, Validators.minLength(11)]],
      phone: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]]
    });
  }

}
