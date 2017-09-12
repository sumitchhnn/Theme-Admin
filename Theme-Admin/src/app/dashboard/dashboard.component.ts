import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loginUser: String;
  userIcon: String;
  constructor() { }

  ngOnInit() {
    this.loginUser = 'Sumit Chauhan';
    this.userIcon = 'assets/images/IMG_7071.JPG';
  }

}
