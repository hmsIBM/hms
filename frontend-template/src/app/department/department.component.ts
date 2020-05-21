import { Component, OnInit, ViewChild } from '@angular/core';
import { FunctionalService } from '../services/functional.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UploadFileService } from '../upload/upload-file.service';
import { FileUpload } from '../upload/fileupload';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  @ViewChild('closebutton',null) closebutton;
  selectedFiles: FileList;
  selectedFile: File;
  currentFileUpload: FileUpload;
  progress: { percentage: number } = { percentage: 0 };
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  lists : Array<any> = []
  hos: any;
  hospitalname: Array<any> = []
  imageId: any;


  myForm: FormGroup;
  departmentName: any;
  hospitalN: any;
  hosp: any;

  constructor(private functionalService: FunctionalService,private uploadService: UploadFileService,  private fb: FormBuilder, private route: Router, private httpClient: HttpClient) { 

    this.myForm = new FormGroup({
      departmentName: new FormControl('' ,[Validators.required]),
      image:new FormGroup({
        url:new FormControl
      
      })
      
       })
   }

  ngOnInit() {
        
         
         this.functionalService.findDept()
         .subscribe((res:Array<any>)=> {
          console.log(res);
          this.lists = res;
         console.log(this.lists);
          
   
        
         })
       
      }
      SaveData()    
      {     
        console.log(this.uploadService.a)
         this.myForm.get('image').get('url').setValue(this.uploadService.a)
        console.log(this.myForm.value); 
        this.functionalService.addDept(this.myForm.value)
        .subscribe(res=>{
          console.log(res)
          this.ngOnInit();
        });
        this.closebutton.nativeElement.click();
      }  
      selectFile(event) {
        this.selectedFiles = event.target.files;
      }
      
      upload() {
        
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
      
        this.currentFileUpload = new FileUpload(file);
        this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
        this.b=this.uploadService.a
        
        console.log(this.uploadService.a)
      
      }
   

Del(aid:number){
  this.functionalService.deleteDepartment(aid)
    .subscribe((res:any)=> {
      console.log(res);
     if(res.status == 200){
       
       this.lists = this.lists.filter((lists)=> lists.id!=aid)
     }
    })
}


addForm(){

  console.log("appointment lelu")
   
    this.myForm.controls['departmentName'].setValue(null);
    this.myForm.get('image').get('url').setValue(null);

   
}

 

 
}


