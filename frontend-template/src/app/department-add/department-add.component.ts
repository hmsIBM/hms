import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FunctionalService } from '../services/functional.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.scss']
})


export class DepartmentAddComponent implements OnInit {

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  imageId: any;


  myForm: FormGroup;
  departmentName: any;
  hospitalN: any;
  hosp: any;
  hospitalname: any;
  hos: any;
  lists: Array<any>;

  constructor(private functionalService: FunctionalService, private fb: FormBuilder, private route: ActivatedRoute, private httpClient: HttpClient) {

      this.myForm = new FormGroup({
     'departmentName': new FormControl('' ,[Validators.required])
     
      })
  }

  ngOnInit() {
    this.addForm();
}


public onFileChanged(event) {
        //Select File
        this.selectedFile = event.target.files[0];
      }
    
   // Gets called when the user clicks on submit to upload the image
    onUpload() {
      console.log(this.selectedFile);
      console.log("hello my boy")
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      console.log("helloooo yeah")
      console.log(uploadImageData)
      //Make a call to the Spring Boot Application to save the image
      this.httpClient.put('http://localhost:8080/api/test/department/4', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          console.log("shubbbb")
          if (response.status == 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
        );

      }


 
  addForm() {
   
    this.myForm =  this.fb.group({    
      departmentName : [' '],
      image: this.fb.group({
        name: [''],
        type: [''],
        picByte: ['']
      })
  })
  }

  SaveData()    
  {    
    console.log(this.myForm.value); 
    this.functionalService.addDept(this.myForm.value)
    .subscribe(res=>{
      console.log(res)
    });
  }   
}
