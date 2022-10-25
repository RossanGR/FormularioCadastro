import { Component, OnInit,} from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from 'src/app/interfaces/User';



@Component({
  selector: 'form-field-overview-example',
  templateUrl: 'form-field-overview-example.html',
  styleUrls: ['./form-field-overview-example.css']
})

export class FormComponent implements OnInit {

  public formData!: FormGroup;
  public phoneMask = ['(',/\d/,/\d/,')',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
  public cpfMask = [/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,'-',/\d/,/\d/];
  

  constructor() { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      name: new FormControl('',[Validators.required]),
      cpf: new FormControl('',[Validators.required, Validators.minLength(11)]),
      phone: new FormControl('',[Validators.required]),
      email: new FormControl ('',[Validators.required, Validators.email])
    });    
  }

  submit(){
    if(this.formData.invalid){return;}
    const dataStorage = JSON.parse(localStorage.getItem('users') || '[]');
    dataStorage.push(this.formData.value)
    const dataLocal = JSON.stringify(dataStorage);
    localStorage.setItem('users', dataLocal);
    // console.log(dataLocal);
    // this.dataUser.push(this.formData.value);
    // console.log(this.dataUser);
  }

}
