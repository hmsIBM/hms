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
import { PatientService } from '../services/patient.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UploadFileService } from '../upload/upload-file.service';
import { FileUpload } from '../upload/fileupload';
import { FunctionalService } from '../services/functional.service';

@Component({
  selector: 'app-tooltips',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})
export class DepartmentAddComponent implements OnInit {
    departmentForm:FormGroup;
    showMessage:boolean= false
    selectedFiles: FileList;
  
    currentFileUpload: FileUpload;
    progress: { percentage: number } = { percentage: 0 };
    constructor(private fuctionalService: FunctionalService,private uploadService: UploadFileService, private fb: FormBuilder, private route: ActivatedRoute, private httpClient: HttpClient) 
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
    department: any
  
  
    ngOnInit(): void {
     
  
      this.departmentForm = this.fb.group({
        departmentName: [''],
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
        
  
        console.log(this.uploadService.a)
        this.departmentForm.get('image').get('url').setValue(this.uploadService.a)
  
        console.log(this.departmentForm.value);
     
        this.fuctionalService.addDept(this.departmentForm.value)
        .subscribe(res=>{
            this.showMessage=true;
          console.log(res)
          this.ngOnInit();
        });
          this.departmentForm.controls['name'].setValue(null);
        this.departmentForm.get('image').get('url').setValue(null);
      
          console.log("working......")
          
        }
  
       
     
}
