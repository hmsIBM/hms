import { Component} from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  constructor(private httpClient: HttpClient) { }

  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;
  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

//Gets called when the user clicks on submit to upload the image
onUpload() {
  console.log(this.selectedFile);
  console.log("hello my boy")
  //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
  const uploadImageData = new FormData();
  uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
  console.log("helloooo yeah")
  console.log(uploadImageData)
  //Make a call to the Spring Boot Application to save the image
  this.httpClient.put('http://localhost:8080/api/test/patient/58', uploadImageData, { observe: 'response' })
    .subscribe((response) => {
      console.log("shubbbb")
      if (response.status == 200) {
        this.message = 'Image uploaded successfully';
        console.log("upload worked.....")
      } else {
        this.message = 'Image not uploaded successfully';
      }
    }
    );


}
  //Gets called when the user clicks on retieve image button to get the image from back end
  getImage() {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          console.log("get image started....")
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          console.log("get image done....")
        }
      );
  }

  // routing()
  // {

  // }

}

