import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl="http://localhost:8000/api/hospital/doctor";


@Injectable({
  providedIn: 'root'
})

export class DoctorService {

 
  constructor(private http:HttpClient) { }


  fetchAllDoctor(){
    return this.http.get(baseUrl);
  }

  
  addDoctor(doctor:any){
    return this.http.get(baseUrl+doctor);
  }
}




