import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
// import {Homepage} from '../homepage/homepage.component'

// import { DoctorService } from '../services/doctor.service';  



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  a: Array<any> = [];
  b: Array<any> = [];
  hospitalName: string
  contactNumber: any
  disease: string
  email: string = null
  gender: string
  id: Int16Array
  name: string

  Doctor: Array<any> = []
  Hospital: Array<any> = []
  DoctorDep: Array<any> = []
  AllDoctor: Array<any> = []
  Department: Array<any> = []
  HospitalOne: Array<any> = []
  hosname: string
  //i:number
  len: number


  patients:Array<any>=[];
  departments:Array<any> = []
  dp:Array<any>=[]
  pp = ["dad", "mom"]
  doctor:Array<any>=[]
  valuePatients:Array<any>=[]

  // a:Array<any>=[];
  // b:Array<any>=[];


  @Input() public parentData;
  constructor(public router: Router, public patientSerivce: PatientService, public httpClient: HttpClient) { }

  // constructor(private router: Router, private patientSerivce: PatientService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.patientSerivce.fetchAllPatient()
    .subscribe((res:Array<any>)=> 
    { 
      this.patientSerivce.departmentarr=res;
      // console.log(res);
      console.log("res pulled...");
      

      

      for (let entry of this.patientSerivce.departmentarr.department) { 
      // console.log(entry);
          
  for (let entry1 of entry.patient) { 
  
    // console.log(entry1)
  
      this.patients.push(entry1);  
      console.log(this.patients)
   }
        }

       
    })

 
  }

 

   

  Del(aid:number){
    this.patientSerivce.deletePatient(aid)
      .subscribe((res:any)=> {
        console.log(res);
       if(res.status == 200){
         
         this.patients = this.patients.filter((patients)=> patients.id!=aid)
       }
      })
  }


}