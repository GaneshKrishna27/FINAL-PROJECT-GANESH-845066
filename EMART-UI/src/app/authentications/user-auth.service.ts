import { Injectable } from '@angular/core';
import { Buyer } from '../Models/buyer';
import { UserService } from '../service/user.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  url:string='http://localhost:63845/User/'
  id:number;
  buyerlist: Buyer[];

  constructor(private service:UserService,private http:HttpClient) { }

  authenticate(username : string, password : string) {
    // create a security token
    // create a security token
    let authenticationToken = "Basic " + window.btoa(username + ":" + password);
    console.log(authenticationToken);
 
    let headers = new HttpHeaders({
      Authorization : authenticationToken
    });
    console.log("calling server")
    // send the request
    return this.http.get(this.url, {headers}).pipe(
      // success function
      map(successData=>{
        console.log("success fun")
        sessionStorage.setItem("username", username);
        // save the token
        sessionStorage.setItem("token", authenticationToken);
        return successData;
      }),
      
      // failure function
      map(failureData=>{
        // console message 
        console.log("failure fun")
        return failureData;
      })
    );
   }
 
   getAuthenticationToken(){
     if(this.isUserLoggedIn())
       return sessionStorage.getItem("token");
     return null; 
   }
 
   isUserLoggedIn(): boolean{
     let user = sessionStorage.getItem('username');
     if(user == null)
       return false;
     return true;  
   }
   
  
   
   logout(){
     
     sessionStorage.removeItem('username');
    //  sessionStorage.removeItem('userid');
     
   }
 
   getUserDetails():string{
     let user = sessionStorage.getItem('username');
     return user;
   }
   
 
}
