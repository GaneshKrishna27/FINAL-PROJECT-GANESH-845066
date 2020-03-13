import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewsubcategory',
  templateUrl: './viewsubcategory.component.html',
  styleUrls: ['./viewsubcategory.component.css']
})
export class ViewsubcategoryComponent implements OnInit {
subcategory:SubCategory;
  constructor(private service:AdminService,private route:Router) { }

  ngOnInit() {
    this.Viewsubcategory();
  }
  Deletesubcategory(scid:string):void{
    this.service.Deletesubcategory(scid).subscribe(res=>{
      console.log("record deleted");
      this.Viewsubcategory();
    },
    err=>
    {
      console.log(err);
    })
   
   }
   Viewsubcategory():void
    {
   this.service.Viewsubcategory().subscribe(res=>
     {
       this.subcategory=res;
       console.log(this.subcategory)
     },
     err=>{
       console.log(err);
     })
   }
  
  

}
