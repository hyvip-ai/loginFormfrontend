import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required])
  })
  constructor(private router: Router, private services:UserService) { }
  
  public messege:any=null
  // public name:any = null
  // public email:any = null
  public token:any = null
  ngOnInit(): void {
    if(localStorage.getItem('logout')){
      this.messege = localStorage.getItem('logout')
      setTimeout(() => {
        this.messege = null
      }, 3000);
    }
  }
  gotoregister(){
    this.router.navigate(['/register'])
  }
  login(){
   this.services.login(this.loginform.value).subscribe(response=>{
      
     
        console.log(response)
        // this.messege = response.messege
  
     if(response.token) {  this.token = response.token;
        // console.log("login component: "+this.token)
        // localStorage.setItem('messege',this.messege);
    
        localStorage.setItem('token',this.token);
        this.messege = "email and password matched"
        // console.log(this.token)}
        setTimeout(() => {
          this.router.navigate(['/dashboard'])
        }, 2000);
     }
     if(response.messege){
      this.messege = response.messege
      setTimeout(() => {
      this.messege = null
      }, 3000);
     }

       
      
      
      
   },err=>console.log(err))
        }


     
}
