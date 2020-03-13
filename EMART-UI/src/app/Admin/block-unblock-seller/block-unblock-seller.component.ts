import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-unblock-seller',
  templateUrl: './block-unblock-seller.component.html',
  styleUrls: ['./block-unblock-seller.component.css']
})
export class BlockUnblockSellerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
 
}
