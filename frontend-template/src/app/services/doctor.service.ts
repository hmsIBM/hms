import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl="http://localhost:8000/api/hospital/";


// const baseUrl="http://localhost:8000/api/hospital/doctor";


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  hospitalarr:Array<any>=[]
  departmentarr:Array<any>=[]
  patientarr:Array<any>=[]



 
  constructor(private http:HttpClient) { }


  fetchAllDoctor(){
    return this.http.get(baseUrl);
  }
  fetchAllHospital(){
    return this.http.get(baseUrl);
  }

  fetchParHospital(hosname:string){
    return this.http.get(baseUrl+hosname);
  }

  
  addDoctor(doctor:any){
    return this.http.get(baseUrl+doctor);
  }
}




