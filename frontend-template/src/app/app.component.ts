import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HMS PORTAL';
  editMode : boolean = false;
  constructor(public router:Router){}
  ngOnInit(){
    
    }

  
}
