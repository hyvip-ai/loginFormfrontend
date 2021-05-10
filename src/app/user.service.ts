import { Injectable } from '@angular/core';
import {  HttpHeaders, HttpClient } from '@angular/common/http';
const httpOptions = {
  headers:new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    
    'content-type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(body:any){
    

    return this.http.post('http://localhost:3000/api/register',body,httpOptions)
  }
  getinfo(){
    return this.http.get('http://localhost:3000/status',httpOptions)
  }
  login(body:any){
    return this.http.post('http://localhost:3000/api/login',body,httpOptions)
  }

  geruser(){
    // console.log("services auth:"+ httpauth.headers)
    return this.http.get('http://localhost:3000/api/getusers',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'auth': localStorage.getItem('token'),
        'content-type':'application/json'
      })
    });
    // console.log(`getuser a asche`)
  }

  logout(){
    return this.http.get('http://localhost:3000/api/logout',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*',
        'auth': localStorage.getItem('token'),
        'content-type':'application/json'
      })
    })
  }

  }