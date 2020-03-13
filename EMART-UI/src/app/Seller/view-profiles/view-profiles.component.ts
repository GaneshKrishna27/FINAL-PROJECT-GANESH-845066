import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/service/seller.service';

@Component({
  selector: 'app-view-profiles',
  templateUrl: './view-profiles.component.html',
  styleUrls: ['./view-profiles.component.css']
})
export class ViewProfilesComponent implements OnInit {

  editprofilesForm: FormGroup;
  
  submitted:boolean=false;
  seller: Seller;
  username: string;

  constructor(private route:Router,private service:SellerService,private formBuilder:FormBuilder) {
    // if(!(localStorage.getItem('token'))){
    //   this.route.navigateByUrl('/home');
    // }
    // else
    // {
    // this.username=localStorage.getItem('username');
    // console.log(this.username);
    // }
    
    let sid=localStorage.getItem('sid');
    console.log(sid);
    this.service.GetById(sid).subscribe(res=>{
      this.seller=res;
      console.log(this.seller);
    })
   }

  ngOnInit() {
    this.editprofilesForm = this.formBuilder.group({
      Sid:['',[Validators.required]],
      Username:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      Password:['',[Validators.required,Validators.pattern('^[a-z]{7}[~!@#$%^&*()]$')]],
      Companyname:['',[Validators.required,Validators.pattern('^[a-z]{3,20}$')]],
      Gstin:['',[Validators.required,Validators.pattern('^[a-z]{3,10}$')]],
      Briefaboutcompany:['',[Validators.required]],
      Address:['',[Validators.required]],
      Website:['',[Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],    
  });
  }
  Editprofile()
  {
    let sid=localStorage.getItem('sid');
    console.log(sid);
    this.service.GetById(sid).subscribe(res=>{
      this.seller=res;
      console.log(this.seller);
      this.editprofilesForm.patchValue({
        Sid:this.seller.sid,
        Username:this.seller.username,
        Password:this.seller.password,
        Companyname:this.seller.companyname,
        Gstin:this.seller.gstin,
        Briefaboutcompany:this.seller.briefaboutcompany,
        Address:this.seller.address,
        Website:this.seller.website,
        Email:this.seller.email,
        Mobile:this.seller.mobile
        
      })
    })
  }
  Update() {         
    this.submitted = true;
     // display form values on success
     if (this. editprofilesForm.valid) {
      this.seller=new Seller();
      this.seller.sid=this.editprofilesForm.value["Sid"];
  this.seller.username=this.editprofilesForm.value["Username"];
  this.seller.password=this.editprofilesForm.value["Password"];
  this.seller.companyname=this.editprofilesForm.value["Companyname"];
  this.seller.gstin=this.editprofilesForm.value["Gstin"];
  this.seller.briefaboutcompany=this.editprofilesForm.value["Briefaboutcompany"];
  this.seller.address=this.editprofilesForm.value["Address"];
  this.seller.website=this.editprofilesForm.value["Website"];
  this.seller.email=this.editprofilesForm.value["Email"];
  this.seller.mobile=this.editprofilesForm.value["Mobile"];
  console.log(this.seller);
    this.service.Editprofile(this.seller).subscribe(res=>
      {
        console.log('Record Updated');
      })
    }
  }
  get f()
  {
    return this.editprofilesForm.controls;
  }
onReset() {
  this.submitted = false;
  this.editprofilesForm.reset();
}

}
