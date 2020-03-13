import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators}from'@angular/forms';
import { Items } from 'src/app/Models/items';
import { SellerService } from 'src/app/service/seller.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  items:Items;
  submitted:boolean=false;
  list:Items[];
  itemForm:FormGroup;
  category:Category[];
  categorylist:Category[];
  subcategorylist:SubCategory[];
  username: string;
  // image: string;

  constructor(private service:SellerService,private formbuilder:FormBuilder,private route:Router) {
    // if(!(localStorage.getItem('token'))){
    //   this.route.navigateByUrl('/home');
    // }
    // else
    // {
    // this.username=localStorage.getItem('username');
    // console.log(this.username);
    // }
    
  }

  ngOnInit() {
    this.itemForm=this.formbuilder.group({
      Iid:[''],
       Cid:[''],
      SCid:[''],
      Itemname:[''],
      Description:[''],
      Price:[''],
      Stock:[''],
      Remarks:[''],
      Sid:[''],
      image:['']

    })
    this.Viewitems();
  }
  Search(iid:string){
    this.service.Getitems(iid).subscribe(res=>{
      this.items=res;
      console.log(this.items);
      this.itemForm.setValue({
        Iid:this.items.iid,
        Cid:this.items.cid,
        SCid:this.items.scid,
        Itemname:this.items.itemname,
        Description:this.items.description,
        Price:this.items.price,
        Stock:this.items.stock,
        Remarks:this.items.remarks,
        Sid:this.items.sid,
        image:this.items.image
      })
  
  
    },err=>{
      console.log(err);
    })
  }

  
  Update(){
      this.items=new Items();
      this.items.iid=(this.itemForm.value["Iid"]);//I+Math.floor(Math.random()*10000)
      this.items.cid=this.itemForm.value["Cid"];
      this.items.scid=this.itemForm.value["SCid"];
      this.items.itemname=this.itemForm.value["Itemname"];
      this.items.description=this.itemForm.value["Description"];
      this.items.price=Number(this.itemForm.value["Price"]);
      this.items.stock=Number(this.itemForm.value["Stock"]);
      this.items.remarks=this.itemForm.value["Remarks"];
      this.items.sid=this.itemForm.value["Sid"];
      this.items.image=this.itemForm.value["image"];
      console.log(this.items);
      this.service.Updateitem(this.items).subscribe(res=>{
        console.log('added');
        alert('Updated')
      },err=>{
        console.log(err);
      })
     
    }

  Deleteitem(iid:string):void{
    this.service.Deleteitem(iid).subscribe(res=>{
      console.log("record deleted");
      this.Viewitems();
    },
    err=>
    {
      console.log(err);
    })
   
   }
   Viewitems()
    {
      let id=localStorage.getItem('sid');
      console.log(id);
   this.service.Viewitems(id).subscribe(res=>
     {
       this.list=res;
       console.log(this.list)
     },
     err=>{
       console.log(err);
     })
   }
   get f()
   {
     return this.itemForm.controls;
   }
   onReset() {
    this.submitted = false;
    this.itemForm.reset();
  }

  


}
