import { Component, OnInit } from '@angular/core';
import { FunctionalService } from '../services/functional.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  lists : Array<any> = []
  hos: any;
  hospitalname: Array<any> = []

  constructor(private functionalService: FunctionalService, private route: ActivatedRoute) {  }

  ngOnInit() {
         this.functionalService.hospitalByName(this.hospitalname)
         .subscribe((res:Array<any>)=> {
         console.log(res);
         this.hos=res[0].name;
         console.log(this.hos);

         this.functionalService.findDept(this.hos)
         .subscribe((res:Array<any>)=> {
          console.log(res);
          this.lists = res;
         console.log(this.lists);
         })
       })
  }

}