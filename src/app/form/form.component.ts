import { Component, OnInit } from '@angular/core';
import {Router} from  '@angular/router';
import {FormGroup, FormControl} from '@angular/forms';
import {FormBuilder,Validators} from '@angular/forms'
import { FormService} from '../form.service'



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  submitted = false;
 

  constructor(private Route:Router,private form:FormBuilder,private service:FormService) { }

    RegistrationForm =this.form.group({
    job: ['',[Validators.required,Validators.pattern(/^[a-zA-Z\s]*$/),Validators.minLength(5)]],
    salary: ['',[Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(4)]],
    description: ['',[Validators.required,Validators.minLength(20)]]
  });
  list()
  {
    let data:any=this.RegistrationForm.value
    this.Route.navigate(['/list'],{queryParams:{data:JSON.stringify(data)}})
  }
  ngOnInit(): void {
  }
  onsubmit()
  {
    this.submitted = true;
  if (this. RegistrationForm.valid) {
     alert('form submitted successfully')
  }
  else
  {
    alert('please enter valid details')
  }
}
}
