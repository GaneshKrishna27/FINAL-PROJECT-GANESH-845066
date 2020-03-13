import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuyerService } from 'src/app/service/buyer.service';
import { FormBuilder, FormGroup, Validators, FormGroupName } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  EditProfileForm: FormGroup;
  
  submitted:boolean=false;
  buyer: Buyer;
  count: number;
  username: string;

  constructor(private route:Router,private service:BuyerService,private formbuilder:FormBuilder) { 
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }
    this.username=localStorage.getItem('username');
    console.log(this.username);


    let bid=localStorage.getItem('bid');
    console.log(bid);
    this.service.GetById(bid).subscribe(res=>{
      this.buyer=res;
      console.log(this.buyer);
    })

    if(localStorage.getItem('bid'))
    {
      let bid=localStorage.getItem('bid');
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
      })
    }
  
  }

  ngOnInit() {
    this.EditProfileForm = this.formbuilder.group({
      Bid:['',[Validators.required]],
      Username:['',[Validators.required]],
      Password:['',[Validators.required,Validators.pattern('^[a-z]{8}[~!@#$%^&*()]$')]],
      Email: ['', [Validators.required, Validators.email]],
      Mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      Datetime:['',[Validators.required]]
     
      
     
  });
  }

  Editprofile()
  {
    let bid=localStorage.getItem('bid');
    console.log(bid);
    this.service.GetById(bid).subscribe(res=>{
      this.buyer=res;
      console.log(this.buyer);
      this.EditProfileForm.patchValue({
        Bid:this.buyer.bid,
        Username:this.buyer.username,
        Password:this.buyer.password,
        Email:this.buyer.email,
        Mobile:this.buyer.mobile,
        Datetime:this.buyer.datetime
      })
    })
  }
  Update()
  {
    this.buyer=new Buyer();
    this.buyer.bid=this.EditProfileForm.value["Bid"];
    this.buyer.username=this.EditProfileForm.value["Username"];
    this.buyer.password=this.EditProfileForm.value["Password"];
    this.buyer.email=this.EditProfileForm.value["Email"];
    this.buyer.mobile=this.EditProfileForm.value["Mobile"];
  this.buyer.datetime=this.EditProfileForm.value["Datetime"];
  
    console.log(this.buyer);
    this.service.Editprofile(this.buyer).subscribe(res=>
      {
        console.log('Record Updated');
      })
  }

  get f() { return this.EditProfileForm.controls; }
  onReset() {
    this.submitted = false;
    this.EditProfileForm.reset();
}
}
