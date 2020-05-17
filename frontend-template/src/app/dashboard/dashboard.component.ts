import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CountService } from '../services/count.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class DashboardComponent implements OnInit {
  count:Array<any>=[];
  constructor(private cs:CountService) { }

  ngOnInit() {
    this.cs.fetchCount()
    .subscribe((res:any)=>{
      console.log("fdjhjd")
      this.count=res;
      console.log(this.count);
       for(let c of this.count){
         console.log("cdcdfd"+c)
       }
    });
    
    
  }

}
