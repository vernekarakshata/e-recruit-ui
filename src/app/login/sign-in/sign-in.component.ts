import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private _fb : FormBuilder) { }

  
  ngOnInit(): void {
    this.createSignInForm();
  }

  createSignInForm(){
    this.signInForm = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  doLogin(){
    console.log("submitted login form");
    
  }

}
