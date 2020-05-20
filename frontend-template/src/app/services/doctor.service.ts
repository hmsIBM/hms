import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor';


const baseUrl="http://localhost:8080/api/hospital/";

//const baseUrl="http://localhost:8000/api/hospital/";
// const dUrl = 'http://localhost:8080/api/hospital/max hospital/department/cardiology/doctor/'
// const pUrl = 'http://localhost:8080/api/hospital/max hospital/department/'
// const doc='/doctor/'

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  hospitalarr:Array<any>=[]
  departmentarr:Array<any>=[]
  patientarr:Array<any>=[]
  name:string=''
  // dUrl:string='http://localhost:8080/api/hospital/'+this.name+'/department/cardiology/doctor/'
  // pUrl:string='http://localhost:8080/api/hospital/'+this.name+'/department/'
  const doc='/doctor/'
  constructor(private http:HttpClient) { }


  // fetchAllDoctor(){
  //   return this.http.get(baseUrl);
  // }
  fetchAllDepartment()
  {
    let pUrl:string='http://localhost:8080/api/hospital/'+this.name+'/department/'
    return this.http.get(pUrl)
  }
  fetchAllHospital(){
    return this.http.get(baseUrl);
  }

  fetchParHospital(hosname:string){
    return this.http.get(baseUrl+hosname);
  }

  addDoctor(dep:any,pat:Doctor ) { 
    console.log([pat]);
   let pUrl:string='http://localhost:8080/api/hospital/'+this.name+'/department/'
     return this.http.put(pUrl+dep+this.doc,
      pat, { observe: 'response' }); }

}




