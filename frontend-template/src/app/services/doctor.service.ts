import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD
const baseUrl="http://localhost:8000/api/hospital/";
=======


const baseUrl="http://localhost:8000/api/hospital/doctor";

>>>>>>> 45ad4c0c6cf09ed4cd6cd02c12beb2a21dc62e9b

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class DoctorService {
  hospitalarr:Array<any>=[]
  departmentarr:Array<any>=[]
  patientarr:Array<any>=[]
=======

export class DoctorService {

 
>>>>>>> 45ad4c0c6cf09ed4cd6cd02c12beb2a21dc62e9b
  constructor(private http:HttpClient) { }


  fetchAllDoctor(){
    return this.http.get(baseUrl);
  }
<<<<<<< HEAD
  fetchAllHospital(){
    return this.http.get(baseUrl);
  }

  fetchParHospital(hosname:string){
    return this.http.get(baseUrl+hosname);
  }
=======
>>>>>>> 45ad4c0c6cf09ed4cd6cd02c12beb2a21dc62e9b

  
  addDoctor(doctor:any){
    return this.http.get(baseUrl+doctor);
  }
}
<<<<<<< HEAD
=======




>>>>>>> 45ad4c0c6cf09ed4cd6cd02c12beb2a21dc62e9b
