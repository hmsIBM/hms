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

  fetchAllPatient() {
    return this.http.get(pUrl);
  }

  // addPatient() {
  //   return this.http.put(dUrl, {observe: 'response'});
  // }

  addPatient(pat:Patient ) { 
    console.log([pat]);
     return this.http.put(dUrl,
      pat, { observe: 'response' }); }
}
