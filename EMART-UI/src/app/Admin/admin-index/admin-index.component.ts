import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {

  constructor(private route:Router) {
    if(!(localStorage.getItem('token'))){
      this.route.navigateByUrl('/home');
    }

   }

  ngOnInit() {
  }
 
}
