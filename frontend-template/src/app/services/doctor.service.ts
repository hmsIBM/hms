import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doctor } from '../models/doctor';


const baseUrl="http://localhost:8080/api/hospital/";
const delUrl="http://localhost:8080/api/hospital/doctor/";
const doc="/doctor/";
//const baseUrl="http://localhost:8000/api/hospital/";
// const dUrl = 'http://localhost:8080/api/hospital/max hospital/department/cardiology/doctor/'
// const pUrl = 'http://localhost:8080/api/hospital/max hospital/department/'


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  hospitalarr:Array<any>=[]
  departmentarr:Array<any>=[]
  patientarr:Array<any>=[]
  name:string=localStorage.getItem('name')
  // dUrl:string='http://localhost:8080/api/hospital/'+this.name+'/department/cardiology/doctor/'
  // pUrl:string='http://localhost:8080/api/hospital/'+this.name+'/department/'
 // const doc='/doctor/'
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
  
  deletethedoctor(dele:number){
    let delUrl:string='http://localhost:8080/api/hospital/doctor/'
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
   let pUrl:string='http://localhost:8080/api/hospital/'+this.name+'/department/'
     return this.http.put(pUrl+dep+doc,
      pat, { observe: 'response' }); }

}




