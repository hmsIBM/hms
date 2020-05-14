import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import {PatientService} from '../services/patient.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// import { DoctorService } from '../services/doctor.service';  



@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  hospitalName:string
  contactNumber:any
  disease:string
  email:string=null
  gender:string
  id:Int16Array
  name:string

  Doctor:Array<any>=[]
  Hospital:Array<any>=[]
  DoctorDep:Array<any>=[]
  AllDoctor:Array<any>=[]
  Department:Array<any>=[]
  HospitalOne:Array<any>=[]
  hosname:string
  //i:number
  len:number


  patients:Array<any>=[];
  departments:Array<any>=[]
  dp:Array<any>=[]
  pp = ["dad", "mom"]
  doctor:Array<any>=[]
  valuePatients:Array<any>=[]

  a:Array<any>=[];
  b:Array<any>=[];

  constructor(private router: Router, private patientSerivce: PatientService) { }

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
   }
        }

        for (let p of this.patients)
        { this.valuePatients.push(p);
          
        }
        console.log(this.valuePatients)
    })
   




      // this.quiz = res;
      // this.currentQuestion = this.quiz[0].name;
      // this.qName = this.currentQuestion.name;

//   }
//   displaydoctor(hosname:string)
// {   this.hosname=hosname;
//   console.log(hosname);
//     this.doctorService.fetchParHospital(hosname)
//     .subscribe((res:Array<any>)=>
//     {
//       console.log(res);
//       this.HospitalOne=res;
//       console.log("hospital one")
//       console.log(this.HospitalOne);
//       this.Department=this.HospitalOne.department;

//       console.log("Department of hospital",this.Department);
//       this.len=this.Department.length
//       console.log(this.len)
//       let i
//       let j
//        for(i=0;i<this.len;i++)
//         {
//         this.Doctor.push(this.Department[i].patient);
//           console.log(this.patient);
         
//         }
     // let a
     // let b
      //  for (let entry of this.Department) { 
      //    a=entry.doctor;

      //    for(let n of a)
      //    {
      //       this.Doctor.add(n.name);
      //    } 
      // }
     // this.Doctor=this.Department[0].doctor;
     
//       console.log("Doctor of hospital",this.Doctor)

//     })
// }
  

}
}