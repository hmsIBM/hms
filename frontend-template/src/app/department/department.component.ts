import { Component, OnInit } from '@angular/core';
import { FunctionalService } from '../services/functional.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  lists : Array<any> = []
  hos: any;
  hospitalname: Array<any> = []

  constructor(private functionalService: FunctionalService, private route: Router, private httpClient: HttpClient) {  }

  ngOnInit() {
         this.functionalService.hospitalByName(this.hospitalname)
         .subscribe((res:Array<any>)=> {
         console.log(res);
        
         this.hos=res[0].name;
         console.log(this.hos);
         
         this.functionalService.findDept(this.hos)
         .subscribe((res:Array<any>)=> {
          console.log(res);
          this.lists = res;
         console.log(this.lists);
          
         this.getImage();
         })
       })
      }


  //     public onFileChanged(event) {
  //       //Select File
  //       this.selectedFile = event.target.files[0];
  //     }
    
  //  // Gets called when the user clicks on submit to upload the image
  //   onUpload() {
  //     console.log(this.selectedFile);
  //     console.log("hello my boy")
  //     //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  //     const uploadImageData = new FormData();
  //     uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  //     console.log("helloooo yeah")
  //     console.log(uploadImageData)
  //     //Make a call to the Spring Boot Application to save the image
  //     this.httpClient.put('http://localhost:8080/api/test/department/16', uploadImageData, { observe: 'response' })
  //       .subscribe((response) => {
  //         console.log("shubbbb")
  //         if (response.status == 200) {
  //           this.message = 'Image uploaded successfully';
  //         } else {
  //           this.message = 'Image not uploaded successfully';
  //         }
  //       }
  //       );
  //     }


      getImage() {
        //Make a call to Sprinf Boot to get the Image Bytes.
        this.httpClient.get('http://localhost:8080/image/get/doc1.jpg')
          .subscribe(
            res => {
              this.retrieveResonse = res;
              this.base64Data = this.retrieveResonse.picByte;
              this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
              
            });
      }

     
  }


