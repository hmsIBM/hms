import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctor-display',
  templateUrl: './doctor-display.component.html',
  styleUrls: ['./doctor-display.component.scss']
})
export class DoctorDisplayComponent implements OnInit {
  Doctor:Array<any>=[]
  Hospital:Array<any>=[]
  DoctorDep:Array<any>=[]
  AllDoctor:Array<any>=[]
  Department:Array<any>=[]
  HospitalOne:Array<any>=[]
  hosname:string
  //i:number
  len:number
  constructor(private doctorService: DoctorService) { }

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
  

}
