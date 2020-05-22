
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
import { PatientService } from '../services/patient.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../upload/upload-file.service';
import { FileUpload } from '../upload/fileupload';
import { FunctionalService } from '../services/functional.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})

export class AddPatientComponent implements OnInit {
  patientForm:FormGroup;

  selectedFiles: FileList;

  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private patientService:PatientService,private fuctionalService: FunctionalService,private uploadService: UploadFileService, private fb: FormBuilder, private route: ActivatedRoute, private httpClient: HttpClient) 
  {

  }
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  bb:string=''
  lists: Array<any>
  a: Array<any>


  ngOnInit(): void {
    // this.onUpload();
    this.fuctionalService.findAppointment()
    .subscribe((res: Array<any>) => {
      console.log(res);
      this.lists = res;
    })
    this.patientService.fetchAllPatient()
    .subscribe((res: Array<any>) => {
      this.a = res;
      console.log(res);
      console.log("res pulled...");
     console.log(this.a);
     
    })


    this.patientForm = this.fb.group({
      name: [''],
     
      gender: [''],
      disease: [''],
      emailId: [''],
      contactNumber: [''],
      departmentName:[''],
     
      image: this.fb.group({
          url:['']
         
      })
    })
   
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
  




    onSubmit() {
      let a
      a=this.patientForm.get('departmentName').value

      console.log(this.uploadService.a)
      this.patientForm.get('image').get('url').setValue(this.uploadService.a)

      console.log(this.patientForm.value);
   
         this.patientService.addPatient(a,this.patientForm.value)
      .subscribe(res=>
        {
        console.log(res)
        })
        this.patientForm.controls['name'].setValue(null);
        this.patientForm.controls['departmentName'].setValue(null);
        this.patientForm.controls['gender'].setValue(null);
        this.patientForm.controls['disease'].setValue(null);
        this.patientForm.controls['emailId'].setValue(null);
        this.patientForm.controls['contactNumber'].setValue(null);
        this.patientForm.get('image').get('url').setValue(null);
    
        console.log("working......")
        
      }

      on(Depart:string){
    
        console.log("hellllllllllllllo")
        this.bb=Depart
        this.patientForm.get('departmentName').setValue(Depart)
    
   
      }  
   
}
