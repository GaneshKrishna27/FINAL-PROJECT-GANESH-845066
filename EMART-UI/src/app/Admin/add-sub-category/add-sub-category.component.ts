import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/service/admin.service';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-sub-category',
  templateUrl: './add-sub-category.component.html',
  styleUrls: ['./add-sub-category.component.css']
})
export class AddSubCategoryComponent implements OnInit {
  subcategoryForm: FormGroup;
    submitted = false;
    subcategory:SubCategory;
    list:Category[];

    constructor(private formBuilder: FormBuilder,private service:AdminService,private route:Router) { 
      this.Getcategory();
    }
    ngOnInit() {

    this.subcategoryForm = this.formBuilder.group({
      SCid: [''],
      SubCategoryname: ['', [Validators.required]],
      CategoryName:['',[Validators.required]],
      Briefdetails:['',[Validators.required,Validators.pattern('^[A-Z a-z . ,]{3,30}$')]],
      Gst:['',[Validators.required,Validators.pattern('^[0-9]{3,5}[%]$')]],
    
  });
  }

// convenience getter for easy access to form fields
get f() { return this.subcategoryForm.controls; }

onSubmit() {
  this.submitted = true;
   // display form values on success
   if(this.subcategoryForm.valid){
    this.subcategory=new SubCategory();
    this.subcategory.scid='SC'+Math.round(Math.random()*999);
    this.subcategory.subCategoryname=this.subcategoryForm.value["SubCategoryname"];
    this.subcategory.cid=this.subcategoryForm.value["CategoryName"];
    this.subcategory.briefdetails=this.subcategoryForm.value["Briefdetails"];
    this.subcategory.gst=this.subcategoryForm.value["Gst"];
    console.log(this.subcategory);
    this.service.Addsubcategory(this.subcategory).subscribe(res=>{
      console.log('Record Added')
    },err=>{
      console.log(err);
    })
    alert('SUCCESS!! :-)\n\n') 
  }
}

onReset() {
  this.submitted = false;
  this.subcategoryForm.reset();
}

Getcategory()
   {
     this.service.Getcategory().subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>
      {
        console.log(err);
      })
    }
}
