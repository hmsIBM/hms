import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Department } from '../models/department';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-doctor-display',
  templateUrl: './doctor-display.component.html',
  styleUrls: ['./doctor-display.component.scss']
})
export class DoctorDisplayComponent implements OnInit {
  Doctor:Array<any>=[];
  Hospital:any
  DoctorDep:Array<any>=[]
  AllDoctor:Array<any>=[]
  Department:Array<any>=[]
  HospitalOne:any
  hosname:string
  department: Array<any>= [];
  showMessage:boolean=false;
  

  //i:number
  len:number
  constructor(private patientService: PatientService, private doctorService: DoctorService) { }

  ngOnInit() {
    this.patientService.fetchAllPatient()
    .subscribe((res: Array<any>) => {
      this.Hospital= res;
      console.log(res);
      console.log("res pulled...");
    //  console.log(this.a);
     

    
    
     for (let entry of this.Hospital.department) { 
      console.log(entry);
          
  for (let entry1 of entry.doctor) { 
  
    console.log(entry1)
  
      this.Doctor.push(entry1);  
   }
        }
    });
  }
  
    deletedoctor(dd:number)
    {   console.log(dd);
        console.log("delete function started")
        this.doctorService.deletethedoctor(dd)
        .subscribe((res:any)=>
      {
        console.log(res);
        if(res.status == 200){
         // this.showMessage = true;
          this.Doctor = this.Doctor.filter((Doctor)=> Doctor.id!=dd)
        }
        this.showMessage=true;
      
      });
      //this.lists = this.lists.filter((lists)=> lists.id!=aid)
    }
    
  }

     
    

  


