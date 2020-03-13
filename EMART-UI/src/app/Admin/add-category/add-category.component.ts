import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/admin.service';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
    submitted = false;
    category:Category;
  


    constructor(private formBuilder: FormBuilder,private service:AdminService,private route:Router) { }
    ngOnInit() {

    this.categoryForm = this.formBuilder.group({
      Cid: [''],
      
      Categoryname: ['', [Validators.required]],
      
      Briefdetails:['',[Validators.required,Validators.pattern('^[A-Z a-z . ,]{3,20}$')]],
      
  });
  }

// convenience getter for easy access to form fields
get f() { return this.categoryForm.controls; }

onSubmit() {
  this.submitted = true;
   // display form values on success
   if(this.categoryForm.valid){
    this.category=new Category();
    this.category.cid='C'+Math.round(Math.random()*999);
    this.category.categoryname=this.categoryForm.value["Categoryname"];
    this.category.briefdetails=this.categoryForm.value["Briefdetails"];
    console.log(this.category);
    this.service.Addcategory(this.category).subscribe(res=>{
      console.log('record added')
    },err=>{
      console.log(err)
    })
    alert('SUCCESS!! :-)\n\n') 
  }
}

onReset() {
  this.submitted = false;
  this.categoryForm.reset();
}
}