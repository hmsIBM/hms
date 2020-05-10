import { Component, OnInit } from '@angular/core';
import { FunctionalService } from '../services/functional.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

lists : Array<any> = []

  constructor(private functionalService: FunctionalService) { }

  ngOnInit() {
    this.functionalService.findDept()
    .subscribe((res:Array<any>)=> {
      console.log(res);
      this.lists = res;
      console.log(this.lists);
    })

  }


}