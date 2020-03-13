import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/service/buyer.service';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-buyerindex',
  templateUrl: './buyerindex.component.html',
  styleUrls: ['./buyerindex.component.css']
})
export class BuyerindexComponent implements OnInit {
list:Items[];
count:number;
buyer:Buyer;
  username: string;
  constructor(private service:BuyerService,private route:Router) {
    

    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }
    else
    {
    this.username=localStorage.getItem('username');
    console.log(this.username);
    }



    if(localStorage.getItem('bid'))
    {
      let bid=localStorage.getItem('bid');
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
        console.log(this.count);
      })
    }



    // let bid=localStorage.getItem('bid');
    // console.log(bid);
    // this.service.GetById(bid).subscribe(res=>{
    //   this.buyer=res;
    //   console.log(this.buyer);
    // })
   }

  ngOnInit() {
  }
  Search(itemname:string){
    
    this.service.SearchItem(itemname).subscribe(res=>{
      this.list=res;
      console.log("success");
      console.log(this.list);
     
      })
    }
    
}
