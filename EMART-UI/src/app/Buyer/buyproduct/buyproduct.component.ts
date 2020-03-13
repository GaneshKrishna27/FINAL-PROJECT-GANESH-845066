import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/service/buyer.service';

import { Router } from '@angular/router';
import { PurchaseHistory } from 'src/app/Models/purchase-history';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-buyproduct',
  templateUrl: './buyproduct.component.html',
  styleUrls: ['./buyproduct.component.css']
})
export class BuyproductComponent implements OnInit {
  purchaseform:FormGroup;
  item:Items;
  pobj:PurchaseHistory;
  submitted=false;
  count: number;
  username: string;
 

 
  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) {  
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }
    this.username=localStorage.getItem('username');
    console.log(this.username);

    if(localStorage.getItem('bid'))
    {
      let bid=localStorage.getItem('bid');
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
      })
    }
    }

  ngOnInit() {
    this. purchaseform=this.formbuilder.group({
      transactionType:[''],
      cardNumber:[''],
      cvv:[''],
      edate:[''],
      name:[''],
      dateTime:[''],
      numberOfItems:[''],
      remarks:[''],
      transactionstatus:['']
    })
    this.item=JSON.parse(localStorage.getItem('item1'));
    console.log(this.item);
    console.log(this.item.iid);
  }  
  onSubmit()
  {
    this.pobj=new PurchaseHistory();
    this.pobj.phid='T'+Math.round(Math.random()*999);
    this.pobj.bid=localStorage.getItem('bid');
    this.pobj.sid=this.item.sid;
    this.pobj.noofitems=Number(this.purchaseform.value["numberOfItems"]);
    this.pobj.iid=this.item.iid;
    this.pobj.transactiontype=this.purchaseform.value["transactionType"];
       this.pobj.datetime=new Date;
       this.pobj.remarks=this.purchaseform.value["remarks"];
       this.pobj.transactionstatus=this.purchaseform.value["transactionstatus"];
       console.log(this.pobj);
       this.service.BuyItem(this.pobj).subscribe(res=>{
         console.log("Purchase was Sucessfull");
         alert('Purchase Done Successfully');
       })
  
  }
  onReset() {
    this.submitted = false;
    this.purchaseform.reset();
  }
    Logout(){
      localStorage.clear();
      this.route.navigateByUrl('/login')
    }
  }