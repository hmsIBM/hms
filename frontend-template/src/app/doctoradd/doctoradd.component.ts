// import { Component, OnInit } from '@angular/core';
// import {formGroup} from

// @Component({
//   selector: 'app-doctoradd',
//   templateUrl: './doctoradd.component.html',
//   styleUrls: ['./doctoradd.component.scss']
// })
// export class DoctoraddComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Department } from '../models/department';





@Component({
  selector: 'app-doctoradd',
     templateUrl: './doctoradd.component.html',
     styleUrls: ['./doctoradd.component.scss']
})

export class DoctoraddComponent implements OnInit {
  doctorForm:FormGroup;
  departmentArr:Array<Department>;
  selectedgroup:any;
  departmentPar:any;
  showMessage:boolean= false;

  constructor(private doctorService:DoctorService, private fb: FormBuilder, private route: ActivatedRoute) {

  //   this.patientForm = new FormGroup({
  //  name: new FormControl('' ),
  //  gender: new FormControl('' ),
  //  disease: new FormControl('' ),
  //  emailId: new FormControl('' ),
  //  contactNumber: new FormControl('')
   
    // })
}
  ngOnInit(): void {
    this.doctorService.fetchAllDepartment()
    .subscribe((res:Array<any>)=>
    {
      console.log(res);
      this.departmentArr=res
      console.log("kjbfkjbRKGBBFJWGFEWFBOJEBF",this.departmentArr)
    }
    )

    this.doctorForm = this.fb.group({
      name: [''],
      emailId: ['nishantbansal@gmail.com'],
      contactNumber: ['7906527394'],
      desig:[''],
      // image: this.fb.group({
      //     name:[''],
      //     type:[''],
      //     picByte:['']
      // })
    })
  
  }
  getVal() {
    console.log("get value working");
    console.log(this.selectedgroup); 
    console.log(this.selectedgroup.department)
    this.departmentPar=this.selectedgroup.department;
    console.log("ok final",this.departmentPar);
}
    onSubmit() {
      console.log(this.doctorForm);
      console.log(this.doctorForm.get('name').value);
      console.log(this.departmentPar);
         this.doctorService.addDoctor(this.departmentPar,this.doctorForm.value)
      .subscribe(res=>
        {
        console.log("final data",res)
        })
        console.log("working......")
        this.showMessage=true;
      }
      getVal() {
        console.log("get value working");
        console.log(this.selectedgroup); 
        console.log(this.selectedgroup.departmentName)
        this.departmentPar=this.selectedgroup.departmentName;
        console.log("ok final",this.departmentPar);
    }
    
}
