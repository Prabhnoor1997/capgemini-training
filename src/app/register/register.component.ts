import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

registerUser(fName,lName,email,password,conPassword){
  if(password!=conPassword)
    return("PAssword doesnt Match");
  else
  {
    var user={
      "firstname": fName,
      "lastName": lName,
      "service":"basic",
      "email" : email,
      "password": password
    }
this.appService.postRequest(user,'user/userSignUP').subscribe((data:any)=>{
  localStorage.setItem('id',data.id);
  if(data!=undefined){
    if(data.success){
      //this.routing.navigate('home')
    }
  }
})
  }

}

  constructor() { }

  ngOnInit() {
  }

}
