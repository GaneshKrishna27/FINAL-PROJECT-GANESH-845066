import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-block-unblock-buyer',
  templateUrl: './block-unblock-buyer.component.html',
  styleUrls: ['./block-unblock-buyer.component.css']
})
export class BlockUnblockBuyerComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
 
}
