import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor';


const baseUrl="http://localhost:8000/api/hospital/";

//const baseUrl="http://localhost:8000/api/hospital/";
const dUrl = 'http://localhost:8000/api/hospital/max hospital/department/cardiology/doctor/'
const pUrl = 'http://localhost:8000/api/hospital/max hospital/department/'
const delUrl = 'http://localhost:8000/api/hospital/doctor/'

const doc='/doctor/'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  hospitalarr:Array<any>=[]
  departmentarr:Array<any>=[]
  patientarr:Array<any>=[]


 
  constructor(private http:HttpClient) { }


  // fetchAllDoctor(){
  //   return this.http.get(baseUrl);
  // }
  fetchAllDepartment()
  {
    return this.http.get(pUrl)
  }

  fetchAllHospital(){
    return this.http.get(baseUrl);
  }
  
  deletedoctor(dele:number){
    console.log(dele);
    console.log("delete in service method started")
    console.log(delUrl+dele)
   return this.http.delete(delUrl+dele,{ observe: 'response' });
  }

  fetchParHospital(hosname:string){
    return this.http.get(baseUrl+hosname);
  }


  addDoctor(dep:any,pat:Doctor ) { 
    console.log([pat]);
     return this.http.put(pUrl+dep+doc,
      pat, { observe: 'response' }); }

}




