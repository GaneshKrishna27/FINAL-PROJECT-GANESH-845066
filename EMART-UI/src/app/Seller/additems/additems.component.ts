import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Items } from 'src/app/Models/items';
import { SellerService } from 'src/app/service/seller.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-additems',
  templateUrl: './additems.component.html',
  styleUrls: ['./additems.component.css']
})
export class AdditemsComponent implements OnInit {
  additemsForm: FormGroup;
    submitted = false;
    items:Items;
    categorylist:Category[];
    subcategorylist:SubCategory[];
    image:string;
  username: string;

    constructor(private formBuilder: FormBuilder,private service:SellerService,private route:Router) {
      
      this.service.Getcategory().subscribe(res=>{
        this.categorylist=res;
        console.log(this.categorylist);
      })
      
     }
    ngOnInit() {

    this.additemsForm = this.formBuilder.group({
      Iid: [''],
      Cid: ['', Validators.required],
      SCid: ['', [Validators.required]],
      Sid: ['', [Validators.required]],
      Itemname:['',[Validators.required]],
      Price:['',[Validators.required]],
      Description:['',[Validators.required]],
      Stock:['',[Validators.required]],
      Remarks:['',[Validators.required]],
      image:['',[Validators.required]]

    
  });
  
  }

// convenience getter for easy access to form fields
get f() { return this.additemsForm.controls; }



onGetsubcategory()
  {
    let cid=this.additemsForm.value["Cid"];
    console.log(cid);
    this.service.Getsubcategory(cid).subscribe(res=>{
      this.subcategorylist=res;
      console.log(this.subcategorylist);
    })
  }

onSubmit() {
  this.submitted = true;
   // display form values on success
   if(this.additemsForm.valid){
    //  let sid=localStorage.getItem('sid')
    alert('SUCCESS!! :-)\n\n') 
  }
  this.Add();
}
Add()
{
  this.items=new Items();
    this.items.iid='I'+Math.round(Math.random()*1000);
    this.items.cid=this.additemsForm.value["Cid"];
    this.items.scid=this.additemsForm.value["SCid"];
    this.items.sid=localStorage.getItem("sid"); 
    this.items.itemname=this.additemsForm.value["Itemname"];
    this.items.price=Number(this.additemsForm.value["Price"]);
    this.items.description=this.additemsForm.value["Description"];
    this.items.stock=Number(this.additemsForm.value["Stock"]);
    this.items.remarks=this.additemsForm.value["Remarks"];
    this.items.image=this.image;
    
    console.log(this.items);
    this.service.Additem(this.items).subscribe(res=>{
      console.log('Items Added');
      alert("Items added");
    },err=>{
      console.log(err);
    })
}
fileEvent(event){
  console.log("upload.......!");
  this.image = event.target.files[0].name;
} 

onReset() {
  this.submitted = false;
  this.additemsForm.reset();
}
}
