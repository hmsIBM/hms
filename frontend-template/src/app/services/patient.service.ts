import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';
import { Hospital } from '../models/hospital';
import { Department } from '../models/department'

 
const pUrl = 'http://localhost:8080/api/hospital/max hospital'
const dUrl = 'http://localhost:8080/api/hospital/max hospital/department/cardiology2/patient'
@Injectable({
  providedIn: 'root'
})
export class PatientService {
 
  name:string=localStorage.getItem('name')
  
  // dUrl:string = 'http://localhost:8080/api/hospital/'+this.name+'/department/cardiology/patient'
  
  hospitalarr: Array<any> = []

  patientarr: Array<any> = []
  constructor(private http: HttpClient) { }
  departmentarr: any;
  // departmentarr: Array<any> = []
  // fetchAllPatient(){

  //   return this.http.get(pUrl);
  // }

  // fetchAllPatientFromDept(department:string)
  // {
  //   return this.http.get(pUrl +department+'/patient');
  // }
  sendAppointment(value: any) {
    return this.http.post('http://localhost:8080/api/hospital',value);
  }
  deletePatient(aid: number) {
    let pUrl:string = 'http://localhost:8080/api/hospital/patient/'
    
    return this.http.delete(pUrl+aid, { observe: 'response' })
  }
  fetchAllPatient() {
    let pUrl:string = 'http://localhost:8080/api/hospital/'+this.name+'/'
    return this.http.get(pUrl);
  }
  
  fetchAllHospital(){
    return this.http.get('http://localhost:8080/api/hospital');
  }
  // addPatient() {
  //   return this.http.put(dUrl, {observe: 'response'});
  // }

  addPatient(a:string,pat:Patient ) { 
    let dUrl:string = 'http://localhost:8080/api/hospital/'+this.name+'/department/'+a+'/patient'
    console.log([pat]);
     return this.http.put(dUrl,
      pat, { observe: 'response' }); }
}
