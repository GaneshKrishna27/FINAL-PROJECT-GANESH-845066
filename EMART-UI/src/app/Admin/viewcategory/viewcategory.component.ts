import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/service/admin.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
category:Category[];
  constructor(private service: AdminService,private route:Router) { }

  ngOnInit() {
    this.Viewcategory();
  }

  Deletecategory(cid:string):void{
    this.service.Deletecategory(cid).subscribe(res=>{
      console.log("record deleted");
      this.Viewcategory();
    },
    err=>
    {
      console.log(err);
    })
   
   }
   Viewcategory():void
    {
   this.service.Viewcategory().subscribe(res=>
     {
       this.category=res;
       console.log(this.category)
     },
     err=>{
       console.log(err);
     })
   }
   
}
