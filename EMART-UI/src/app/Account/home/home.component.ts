import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  gotoabout(){
    
    document.getElementById("aboutid").scrollIntoView();
  }
  gotocontact(){
    
    document.getElementById("contactid").scrollIntoView();
  }
  submit()
  {
    alert("Feedback successfull")
  }

  ngOnInit() {
  }

}
