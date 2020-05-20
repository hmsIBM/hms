
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
  image: FormGroup;


  constructor(private patientService:PatientService, private fb: FormBuilder, private route: ActivatedRoute, private httpClient: HttpClient) 
  {

  }
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;


 


  ngOnInit(): void {
    // this.onUpload();
    this.patientForm = this.fb.group({
      name: [''],
      gender: ['Male'],
      disease: [''],
      emailId: ['lkshkarki@gmail.com'],
      contactNumber: ['7087627436'],
      // const uploadImageData = new FormData();
      image: this.fb.group({
          name:[''],
          type:[''],
          picByte:['']
      })
    })
   
  }

  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image.patchValue({
        // fileSource: this.selectedFile\
      // fileSource:this.selectedFile
        name: this.selectedFile.name,
        type: this.selectedFile.type,
        
        picByte: this.selectedFile.size

      });
      
    }
  }


  // onUpload() {
  //   console.log(this.selectedFile);
  //   console.log("ready to upload")
  //   // FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  //   const uploadImageData = new FormData();
  //   uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);

//     uploadImageData.forEach((value,key) => {
//       console.log(key+" space "+value)
//       console.log("in for loop")
// });
//     var outputLog = {}, iterator = uploadImageData.entries(), end = false;
// while(end == false) {
//    var item = iterator.next();
//    if(item.value!=undefined) {
//        outputLog[item.value[0]] = item.value[1];
//    } else if(item.done==true) {
//        end = true;
//    }
//     }
// console.log(outputLog);

    // console.log("image appended");
    // console.log(uploadImageData)
    // // Make a call to the Spring Boot Application to save the image
    // this.httpClient.post('http://localhost:8080/api/test/upload', uploadImageData, { observe: 'response' })
    //   .subscribe((response) => {
    //     console.log("image upload response")
    //     if (response.status == 200) {
    //       this.message = 'Image uploaded successfully';
    //       console.log("Image upload worked.....");
    //     } else {
    //       this.message = 'Image not uploaded successfully';
    //     }
    //   }
    //   );
  
  
  // }



    onSubmit() {
      console.log("selected file data",this.selectedFile);
      console.log("ready to upload")
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
      const uploadImageData = new FormData();
      //  uploadImageData.append('imageFile', this.image.get('fileSource').value);
       uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
      
      //  uploadImageData.append(this.image.get('this.name').value, this.image.get('this.type').value, this.image.get('this.picByte').value );


      console.log("image appended");
      this.httpClient.post('http://localhost:8080/api/test/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        console.log("image upload response")
        if (response.status == 200) {
          this.message = 'Image uploaded successfully';
          console.log("Image upload worked.....");
        } else {
          this.message = 'Image not uploaded successfully';
        }
      }
      );



      console.log(this.patientForm.value);
      console.log(this.image.value);
         this.patientService.addPatient(this.patientForm.value)
      .subscribe(res=>
        {
        console.log(res)
        })
        console.log("working......")
      }
   
}
