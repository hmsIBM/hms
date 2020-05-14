import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
<<<<<<< HEAD


const baseUrl="http://localhost:8000/api/hospital/";

=======
const baseUrl="http://localhost:8000/api/hospital/";
>>>>>>> 3a7ac1f6d6bbc7e96534914e622830b785936bf4

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
=======
export class DoctorService {
  hospitalarr:Array<any>=[]
  departmentarr:Array<any>=[]
  patientarr:Array<any>=[]
>>>>>>> 3a7ac1f6d6bbc7e96534914e622830b785936bf4


 
  constructor(private http:HttpClient) { }


  fetchAllDoctor(){
    return this.http.get(baseUrl);
  }
<<<<<<< HEAD


=======
>>>>>>> 3a7ac1f6d6bbc7e96534914e622830b785936bf4
  fetchAllHospital(){
    return this.http.get(baseUrl);
  }

  fetchParHospital(hosname:string){
    return this.http.get(baseUrl+hosname);
  }
<<<<<<< HEAD

=======
>>>>>>> 3a7ac1f6d6bbc7e96534914e622830b785936bf4

  
  addDoctor(doctor:any){
    return this.http.get(baseUrl+doctor);
  }
}
<<<<<<< HEAD
=======




>>>>>>> 3a7ac1f6d6bbc7e96534914e622830b785936bf4
