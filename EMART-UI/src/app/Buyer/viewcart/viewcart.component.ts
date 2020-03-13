import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/Models/cart';
import { BuyerService } from 'src/app/service/buyer.service';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {
  cartlist:Cart;
  item:Items[];
  count: number;
  item_qty: number;
  username: string;

  constructor(private route:Router,private service:BuyerService) {
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }
    this.username=localStorage.getItem('username');
    console.log(this.username);

    
    let bid=localStorage.getItem('bid'); 
    this.service.GetCartItems(bid).subscribe(res=>{
      this.cartlist=res;
      console.log(this.cartlist);
    })

    if(localStorage.getItem('bid'))
    {
      let bid=localStorage.getItem('bid');
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
      })
    }


    this.item_qty = 1;
  }

  ngOnInit() {
  }
  Buynow(item1:Items)
  {
    console.log(item1);
    localStorage.setItem('item1',JSON.stringify(this.item));
    this.route.navigateByUrl('buyproduct');
  }
  Remove(cartid:string)
  {
    console.log(cartid);
    this.service.RemoveCartItem(cartid).subscribe(res=>{
      console.log('item removed from cart');
      alert('Item removed from cart');
      window.location.reload();
    })
  }
  
    Logout(){
      localStorage.clear();
      this.route.navigateByUrl('/login')
    }

    incrementQty(){
      this.item_qty += 1;
      console.log(this.item_qty + 1);
      }
      
      //decrements item
      
      decrementQty(){
      if(this.item_qty-1 < 1){
        this.item_qty = 1;
        console.log('item_1->' + this.item_qty)
      }
      else{
        this.item_qty -= 1;
        console.log('item_2->' + this.item_qty);
      }
      }
}
