import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BuyerService } from 'src/app/service/buyer.service';
import { Buyer } from 'src/app/Models/buyer';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  EditProfileForm: FormGroup;
  submitted: boolean;
    
    buyer:Buyer;
  count: number;;

  constructor(private formBuilder: FormBuilder,private service:BuyerService,private route:Router) {
    if(localStorage.getItem('bid'))
    {
      let bid=localStorage.getItem('bid');
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
      })
   }
  }

  ngOnInit() {
      this.EditProfileForm = this.formBuilder.group({
          Bid:['',[Validators.required]],
          Username:['',[Validators.required]],
          Password:['',[Validators.required,Validators.pattern('^[a-z]{8}[~!@#$%^&*()]$')]],
          Email: ['', [Validators.required, Validators.email]],
          Mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
          Datetime:['',[Validators.required]]
         
          
         
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.EditProfileForm.controls; }

  onSearch(){
    let Bid=localStorage.getItem('bid');
    this.service.GetById(Bid).subscribe(res=>
      {
          this.buyer=res;
          console.log(this.buyer);
          this.EditProfileForm.setValue({
           Bid:this.buyer.bid,
           Username:this.buyer.username,
           Password:this.buyer.password,
           Email:this.buyer.email,
           Mobile:this.buyer.mobile,
           Datetime:this.buyer.datetime

         })
      },err=>{
        console.log(err)
      })
  }

  onSubmit() {
      
      this.submitted = true;
       // display form values on success
       if (this.EditProfileForm.valid) {
        this.buyer=new Buyer();
        this.buyer.bid=this.EditProfileForm.value["Bid"];   
    this.buyer.username=this.EditProfileForm.value["Username"];
    this.buyer.password=this.EditProfileForm.value["Password"];
    this.buyer.email=this.EditProfileForm.value["Email"];
    this.buyer.mobile=this.EditProfileForm.value["Mobile"];
    this.buyer.datetime=this.EditProfileForm.value["Datetime"];
    this.service.Editprofile(this.buyer).subscribe(res=>{
    console.log('Record Updated')
    },err=>{
    console.log(err)
    })
        alert('SUCCESS!! :-)\n\n') 
        // console.log(JSON.stringify(this.SignupForm.value));
    }
  }

  onReset() {
      this.submitted = false;
      this.EditProfileForm.reset();
  }
 
}
