import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SellerService } from 'src/app/service/seller.service';
import { Seller } from 'src/app/Models/seller';


@Component({
  selector: 'app-sellerindex',
  templateUrl: './sellerindex.component.html',
  styleUrls: ['./sellerindex.component.css']
})
export class SellerindexComponent implements OnInit {
  seller:Seller;
  username: string;

  constructor(private route:Router,private service:SellerService) {
    if(!(localStorage.getItem('sid'))){
      this.route.navigateByUrl('/home');
    }
    else
    {
    this.username=localStorage.getItem('username');
    console.log(this.username);
    }


  
   }

  ngOnInit() {
  }
  
}
