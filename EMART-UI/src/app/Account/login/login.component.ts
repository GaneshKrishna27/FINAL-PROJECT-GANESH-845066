import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
import { Token } from 'src/app/Models/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
    submitted = false;
    username:string;
    password:string;
    errmsg:string;
    buyer:Buyer;
    seller:Seller;
    role: any;
    token:Token;

    constructor(private formBuilder: FormBuilder,private route:Router,private service:UserService) { }

  ngOnInit() {
    this.login = this.formBuilder.group({
      username:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      password:['',[Validators.required,Validators.pattern('^[A-Za-z]{8}[~!@#$%^&*()]$')]],
      role:['']
  });
}
// convenience getter for easy access to form fields
get f() { return this.login.controls; }

onSubmit() {
    this.submitted = true;
     // display form values on success
     }

onReset() {
    this.submitted = false;
    this.login.reset();
}
public Validate()
{
  let username=this.login.value['username'];
  let password=this.login.value['password'];
  let role=this.login.value['role'];
  this.token=new Token();
  // alert(username)
  // alert(role)
  if(role=='buyer')
  {
    this.service.BuyerSignin(username,password).subscribe(res=>{
      console.log(res);
      this.token=res;
      
      if(this.token.msg=='Success'){
        localStorage.setItem('token',this.token.token);
        localStorage.setItem('bid',this.token.bid);
        localStorage.setItem('username',username);
          this.route.navigateByUrl('/buyerindex');
      }
      else{
        alert('Invalid Credentials');
      }
    });
  }
if(role=='seller')
{
 
this.service.SellerSignin(username,password).subscribe(res=>{
  console.log(res)
  this.token=res;
  
  if(this.token.msg=="Success"){
    localStorage.setItem('token',this.token.token);
    localStorage.setItem('sid',this.token.sid);
    localStorage.setItem('username',username);
    this.route.navigateByUrl("/sellerindex")
  }
  else{
    alert('inavlid  Credentials');
  }
});

}
if(username=="Admin" && password=="admin")
{
  localStorage.setItem('token',this.token.token);
  this.route.navigateByUrl("/adminindex");
}
}
Navigate()
{
  switch(this.role){
    case "buyer":
      this.route.navigateByUrl("buyerindex");
      break;
      case "seller":
      this.route.navigateByUrl("sellerindex");
      break;
      case "admin":
      this.route.navigateByUrl("adminindex");
      break;
      default:
        alert("invalid credentials");

 }
}
}