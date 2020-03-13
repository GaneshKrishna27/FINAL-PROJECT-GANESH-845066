import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router) { 
   
      localStorage.clear();
      localStorage.removeItem('bid');
      localStorage.removeItem('token');
      localStorage.removeItem('sid');
      this.route.navigateByUrl('/home');
    
  }

  ngOnInit() {
  }

}
