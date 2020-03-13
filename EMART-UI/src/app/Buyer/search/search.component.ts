import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/service/buyer.service';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  list:Items[];
  isShow:boolean=true;
  clist:Category[];
  category:string;
  cart: any;
  itemname:string;
  SearchForm:FormGroup;
  count: number;
  username: string;
  constructor(private service:BuyerService,private route:Router,private formbuilder:FormBuilder) {
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }
    this.username=localStorage.getItem('username');
    console.log(this.username);



    this.service.Getcategory().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);

      this.service.Getallitems().subscribe(res=>{
        this.list=res;
        console.log(this.list);
      })
    })


    if(localStorage.getItem('bid'))
    {
      let bid=localStorage.getItem('bid');
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
      })
    }
   }

  ngOnInit() {
    this.SearchForm = this.formbuilder.group({
      itemname:['',[Validators.required]]
        
  });

    
  }
  Getallitems()
  {
    this.service.Getallitems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })
  }
  
  Search(){
  
    this.service.SearchItem(this.itemname).subscribe(res=>{
      this.list=res;
      console.log("success");
      console.log(this.list);
     
      })
    }

    Buy(item1:Items){
        console.log(item1);
        localStorage.setItem('item1',JSON.stringify(item1));
        this.route.navigateByUrl('/buyproduct');
    }
    SearchByCategory(cid:string){
      console.log(cid);
      this.service.SearchByCategoryId(cid).subscribe(res=>{
        this.list=res;
        console.log(this.list);
      })
    }
    Logout(){
      localStorage.clear();
      this.route.navigateByUrl('/login')
    }
    AddtoCart(item2:Items){
      console.log(item2);
      let bid=localStorage.getItem('bid');
     this.cart=new Cart();
     this.cart.cartid='cartid'+Math.round(Math.random()*1000);
     this.cart.iid=item2.iid;
     this.cart.itemname=item2.itemname;
     this.cart.cid=item2.cid;
     this.cart.scid=item2.scid;
     this.cart.sid=item2.sid;
     this.cart.stock=item2.stock;
     this.cart.price=item2.price;
     this.cart.description=item2.description;
     this.cart.remarks=item2.remarks;
     this.cart.image=item2.image;
     this.cart.bid=bid;
     console.log(this.cart);
     this.service.AddtoCart(this.cart).subscribe(res=>{
       console.log("Record added To Cart");
       alert('Item has been Added To Cart');
       window.location.reload();
     })
    }
    
}
