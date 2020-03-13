import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-daily-reports',
  templateUrl: './daily-reports.component.html',
  styleUrls: ['./daily-reports.component.css']
})
export class DailyReportsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
 
}
