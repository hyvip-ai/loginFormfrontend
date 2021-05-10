import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
     myinfo:any = null
  constructor(private service:UserService) { }

  ngOnInit(): void {
  }
  info(){
    this.service.getinfo().subscribe(data=>{
       this.myinfo = data;
      console.log(this.myinfo)
    })
  }
  
}
