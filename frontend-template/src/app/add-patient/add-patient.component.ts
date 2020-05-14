
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



@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})

export class AddPatientComponent implements OnInit {
  patientForm:FormGroup;

  constructor(private patientService:PatientService, private fb: FormBuilder, private route: ActivatedRoute, private httpClient: HttpClient) 
  {

  }


 


  ngOnInit(): void {
    this.patientForm = this.fb.group({
      name: [''],
      gender: ['Male'],
      disease: [''],
      emailId: ['lkshkarki@gmail.com'],
      contactNumber: ['7087627436'],
      // image: this.fb.group({
      //     name:[''],
      //     type:[''],
      //     picByte:['']
      // })
    })
  
  }

    onSubmit() {
      console.log(this.patientForm);
      console.log(this.patientForm.get('name').value);
         this.patientService.addPatient(this.patientForm.value)
      .subscribe(res=>
        {
        console.log(res)
        })
        console.log("working......")
      }
 
      

     
}
