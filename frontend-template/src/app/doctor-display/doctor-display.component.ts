import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctor-display',
  templateUrl: './doctor-display.component.html',
  styleUrls: ['./doctor-display.component.scss']
})
export class DoctorDisplayComponent implements OnInit {
  Doctor:Array<any>=[];
  Hospital:Array<any>=[];
  DoctorDep:Array<any>=[]
  AllDoctor:Array<any>=[]
  Department:Array<any>=[]
  HospitalOne:any;
  hosname:string;
  selectedFile: File;
retrievedImage: any;
base64Data: any;
retrieveResonse: any;
message: string;
imageName: any;
imagearr:Array<any>=[];
valueDoctor:Array<any>=[];
showMessage:boolean=false;
  //i:number
  len:number
  constructor(private doctorService: DoctorService,private httpClient: HttpClient) { }

  ngOnInit() {
    this.doctorService.fetchAllHospital()
    .subscribe((res:Array<any>)=>
    {
      console.log(res);
      this.Hospital=res
      console.log("kjbfkjbRKGBBFJWGFEWFBOJEBF",this.Hospital)
    }
    )
  }
displaydoctor(hosname:string)
{   this.hosname=hosname;
  console.log(hosname);
    this.doctorService.fetchParHospital(hosname)
    .subscribe((res:Array<any>)=>
    {
      console.log(res);
      this.HospitalOne=res;
      console.log("hospital one")
      console.log(this.HospitalOne);
      this.Department=this.HospitalOne.department;
      

      console.log("Department of hospital",this.Department);
      this.len=this.Department.length
      console.log(this.len)
      let i
      let j
      let k
       for(i=0;i<this.len;i++)
        {
        this.Doctor.push(this.Department[i].doctor);
          console.log("doctor",this.Doctor);
         
        }
       // this.DoctorDep=this.Doctor[0];
       // console.log("bvbvibrivbrbvb",this.DoctorDep)
        for(j=0;j<this.Doctor.length;j++)
        {
            for(k=0;k<this.Doctor[j].length;k++)
              this.DoctorDep.push(this.Doctor[j][k]);
              console.log("doctor of array",this.DoctorDep);
         
        }
        
        for (let p of this.DoctorDep)
        { this.valueDoctor.push(p);
          // this.imagearr.push(p.image.name);
          console.log("name of images:", p.image.name );
          this.getImage(p.image.name);
        }
        console.log(this.valueDoctor[1].image.name);
        // console.log(this.imagearr);
        console.log("working....")
        console.log(this.valueDoctor)
        console.log(this.imagearr); 
     // let a
     // let b
      //  for (let entry of this.Department) { 
      //    a=entry.doctor;

      //    for(let n of a)
      //    {
      //       this.Doctor.add(n.name);
      //    } 
      // }
     // this.Doctor=this.Department[0].doctor;
     
      console.log("Doctor of hospital",this.Doctor)

    })
}
  deletedoctor(dd:number)
  {   console.log(dd);
      console.log("delete function started")
      this.doctorService.deletedoctor(dd)
      .subscribe((res:any)=>
    {
      console.log(res);
      if(res.status == 200){
       // this.showMessage = true;
        this.DoctorDep = this.DoctorDep.filter((DoctorDep)=> DoctorDep.id!=dd)
      }
      this.showMessage=true;
    
    });
    //this.lists = this.lists.filter((lists)=> lists.id!=aid)
  }

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
this.httpClient.put('http://localhost:8000/api/test/doctor/38', uploadImageData, { observe: 'response' })
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
getImage(name:string) {
  //Make a call to Sprinf Boot to get the Image Bytes.
  console.log("nameeeeeeeeeeeeeeeeeee:", name)
  this.httpClient.get('http://localhost:8000/image/get/' +name)
    .subscribe(
      res => {
        console.log("get image started....")
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        this.imagearr.push(this.retrievedImage);
        console.log("get image done....")
      }
    );
}

  

}
