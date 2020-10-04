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
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from '../services/doctor.service';
import { Department } from '../models/department';
import { PatientService } from '../services/patient.service';
import { FileUpload } from '../upload/fileupload';
import { FunctionalService } from '../services/functional.service';
import { UploadFileService } from '../upload/upload-file.service';




@Component({
  selector: 'app-doctoradd',
     templateUrl: './doctoradd.component.html',
     styleUrls: ['./doctoradd.component.scss']
})

export class DoctoraddComponent implements OnInit {
  selectedFiles: FileList;

  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  doctorForm:FormGroup;
  departmentArr:Array<Department>;
  selectedgroup:any;
  departmentPar:any;
  showMessage:boolean= false;
  bb:string=''
  a:Array<any>=[]
  department: Array<any>= [];
  constructor(private doctorService:DoctorService,private uploadService: UploadFileService,private patientService:PatientService, private fb: FormBuilder, private route: ActivatedRoute) {

  //   this.patientForm = new FormGroup({
  //  name: new FormControl('' ),
  //  gender: new FormControl('' ),
  //  disease: new FormControl('' ),
  //  emailId: new FormControl('' ),
  //  contactNumber: new FormControl('')
   
    // })
}
  ngOnInit(): void {
    this.patientService.fetchAllPatient()
    .subscribe((res: Array<any>) => {
      this.a = res;
      console.log(res);
      console.log("res pulled...");
     console.log(this.a);
     
    })
    

    this.doctorForm = this.fb.group({
      name: [''],
      emailId: [''],
      contactNumber: [''],
      desig:[''],
      image: this.fb.group({
        url:['']
       
    })
      // image: this.fb.group({
      //     name:[''],
      //     type:[''],
      //     picByte:['']
      // })
    })
  
  }
//   getVal() {
//     console.log("get value working");
//     console.log(this.selectedgroup); 
//     console.log(this.selectedgroup.department)
//     this.departmentPar=this.selectedgroup.department;
//     console.log("ok final",this.departmentPar);
// }
    onSubmit() {
      console.log(this.uploadService.a)
      this.doctorForm.get('image').get('url').setValue(this.uploadService.a)
      console.log(this.doctorForm);
      console.log(this.doctorForm.get('name').value);
  
         this.doctorService.addDoctor(this.bb,this.doctorForm.value)
      .subscribe(res=>
        {
        console.log("final data",res)
        })
        console.log("working......")
        this.showMessage=true;
        this.doctorForm.controls['name'].setValue(null);
        this.doctorForm.controls['contactNumber'].setValue(null);
        this.doctorForm.controls['emailId'].setValue(null);
        this.doctorForm.controls['desig'].setValue(null);
        
      }
     
      on(Depart:string){
    
        console.log("hellllllllllllllo")
        this.bb=Depart
       
    
   
      }  
      selectFile(event) {
        this.selectedFiles = event.target.files;
      }
      
      upload() {
        
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
      
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
        
        
        console.log(this.uploadService.a)
      
      }
}
