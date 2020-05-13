import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const pUrl = 'http://localhost:8000/api/hospital/max_hospital'
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  hospitalarr:Array<any>=[]
  departmentarr:Array<any>=[]
  patientarr:Array<any>=[]
  constructor(private http:HttpClient) { }


  // fetchAllPatient(){

  //   return this.http.get(pUrl);
  // }

  // fetchAllPatientFromDept(department:string)
  // {
  //   return this.http.get(pUrl +department+'/patient');
  // }

  fetchAllPatient(){
    return this.http.get(pUrl);
  }


}
