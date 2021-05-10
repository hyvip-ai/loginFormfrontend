import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registrationform:FormGroup = new FormGroup({

  name:new FormControl('',[Validators.required]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required])
})
  constructor(private router:Router,private service:UserService) {
   
   }
  
  ngOnInit(): void {
   
  }
   gotologin(){
    this.router.navigate(['/login']); 
   }
   showme(){
     
    this.service.register(JSON.stringify(this.registrationform.value)).subscribe(data=>{console.log(data),this.router.navigate(['/login']);})

}
}
