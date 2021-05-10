import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//  public token:any = null;
 public email:any = null;
 public name:any = null
  constructor(private services:UserService ,private router:Router) { }

  ngOnInit(): void {
    
   
  
    this.services.geruser().subscribe(res=>{
     
     
      console.log(res)
      // console.log(localStorage.getItem('token'))

      this.name = res.name;
      this.email = res.email;
      
     
        
      

    },err=>this.router.navigate(['/login']))



  }

  logout(){
    
    this.services.logout().subscribe(data=>{
      localStorage.setItem('logout',data.messege);
      localStorage.removeItem('token');
      this.router.navigate(['/login'])
    },err=>console.log(err))
  }

  

}
