import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl="http://localhost:8000/api/hospital/";


@Injectable({
  providedIn: 'root'
})

export class DoctorService {

 
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




