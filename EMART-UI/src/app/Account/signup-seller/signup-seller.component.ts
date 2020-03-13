import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Seller } from 'src/app/Models/seller';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-signup-seller',
  templateUrl: './signup-seller.component.html',
  styleUrls: ['./signup-seller.component.css']
})
export class SignupSellerComponent implements OnInit {

    SignupForm: FormGroup;
    submitted :boolean;
    list:Seller[];
    seller:Seller;

    constructor(private formBuilder: FormBuilder,private service:UserService) { }

    ngOnInit() {
        this.SignupForm = this.formBuilder.group({
            Sid: [''],
            Username:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,20}$')]],
            Password:['',[Validators.required,Validators.pattern('^[A-Za-z]{8}[~!@#$%^&*()]$')]],
            Companyname:['',[Validators.required,Validators.pattern('^[A-Z a-z]{3,20}$')]],
            Gstin:['',[Validators.required,Validators.pattern('^[A-Za-z0-9]{3,10}$')]],
            Briefaboutcompany:['',[Validators.required,Validators.pattern('^[A-Z a-z . ,]{3,20}$')]],
            Address:['',[Validators.required,Validators.pattern('^[A-Z a-z 0-9 -]{3,20}$')]],
            Website:['',[Validators.required,Validators.pattern('^[A-Z a-z 0-9]{3,20}$')]],
            Email: ['', [Validators.required, Validators.email]],
            Mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
             
            acceptTerms: [false, Validators.requiredTrue]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.SignupForm.controls; }

    onSubmit() {
        this.submitted = true;   
    // display form values on success
        if (this.SignupForm.valid) {
            this.seller=new Seller();
        this.seller.sid='S'+Math.round(Math.random()*999);
        this.seller.username=this.SignupForm.value["Username"];
        this.seller.password=this.SignupForm.value["Password"];
        this.seller.companyname=this.SignupForm.value["Companyname"];
        this.seller.gstin=this.SignupForm.value["Gstin"];
        this.seller.briefaboutcompany=this.SignupForm.value["Briefaboutcompany"];
        this.seller.address=this.SignupForm.value["Address"];
        this.seller.website=this.SignupForm.value["Website"];
        this.seller.email=this.SignupForm.value["Email"];
        this.seller.mobile=this.SignupForm.value["Mobile"];
         
        this.service.SellerSignup(this.seller).subscribe(res=>{
        console.log('Record Added')
        },err=>{
        console.log(err)
        })
            alert('SUCCESS!! :-)\n\n') 
            // console.log(JSON.stringify(this.SignupForm.value));
        }
    }

    onReset() {
        this.submitted = false;
        this.SignupForm.reset();
    }
}




// ,Validators.pattern('^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}$')
//,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')