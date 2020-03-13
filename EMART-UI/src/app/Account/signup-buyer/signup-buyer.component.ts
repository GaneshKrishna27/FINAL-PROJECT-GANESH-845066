import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Buyer } from 'src/app/Models/buyer';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-signup-buyer',
  templateUrl: './signup-buyer.component.html',
  styleUrls: ['./signup-buyer.component.css']
})
export class SignupBuyerComponent implements OnInit {

  SignupForm: FormGroup;
    submitted :boolean;
    list:Buyer[];
    buyer:Buyer;

    constructor(private formBuilder: FormBuilder,private service:UserService) {}

    ngOnInit() {
        this.SignupForm = this.formBuilder.group({
            bid: [''],
            username:['',[Validators.required,Validators.pattern('^[A-Za-z]{3,20}$')]],
            password:['',[Validators.required,Validators.pattern('^[A-Za-z]{8}[~!@#$%^&*()]$')]],
            email: ['', [Validators.required, Validators.email]],
            mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
            datetime:['',[Validators.required]],
            
            acceptTerms: [false, Validators.requiredTrue]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.SignupForm.controls; }

    onSubmit() {
        this.submitted = true;   
    // display form values on success
        if (this.SignupForm.valid) {
            this.buyer=new Buyer();
        this.buyer.bid='B'+Math.round(Math.random()*999);
        this.buyer.username=this.SignupForm.value["username"];
        this.buyer.password=this.SignupForm.value["password"];
        this.buyer.email=this.SignupForm.value["email"];
        this.buyer.mobile=this.SignupForm.value["mobile"];
        this.buyer.datetime=this.SignupForm.value["datetime"];  
        this.service.BuyerSignup(this.buyer).subscribe(res=>{
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