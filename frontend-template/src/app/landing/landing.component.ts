import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router:Router,private patientSerivce: PatientService) { }

  ngOnInit() {

    this.patientSerivce.fetchAllPatient()
    .subscribe((res:Array<any>)=> 
    { 
      this.patientSerivce.departmentarr=res;
      console.log(res);
      console.log("res pulled...");
    })
  }
route(){
  this.router.navigate(['/dashboard'])

}
scroll(el: HTMLElement) {
  el.scrollIntoView({behavior:"smooth"});
}
}
