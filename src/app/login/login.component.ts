import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email=new FormControl('',[Validators.required,Validators.email]);
  public password=new FormControl('',[Validators.required,Validators.minLength(8)]);
  public ConfirmPassword=new FormControl('',[Validators.required,Validators.minLength(8)]);

  getEmailInvalidMessage(){
    if(this.email.hasError("required")){
      return("Email is required");
    }
    if(this.email.hasError("email")){
      return("Invalid Email")
    }
  }

  getPasswordInvalidMessage(){
    if(this.password.hasError("required") || this.ConfirmPassword.hasError("required")){
      return("Password is required");
    }
    if(this.password.hasError("minLength") || this.ConfirmPassword.hasError("minLength")){
      return("Minimum Length of 8 ")
    }
  }

register(){
  
}

  constructor() { }

  ngOnInit() {
  }

}
