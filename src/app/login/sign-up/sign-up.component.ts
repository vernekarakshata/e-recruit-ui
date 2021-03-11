import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private _fb : FormBuilder) { }

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm() : void{
    this.signUpForm = this._fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      emailId: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doRegister() : void{
    
  }

}
