import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';
import { Hospital } from '../models/hospital';
import {Department} from '../models/department'


const pUrl = 'http://localhost:8080/api/hospital/max_hospital'
@Injectable({
  providedIn: 'root'
})
export class PatientService {
  hospitalarr:Array<any>=[]

  patientarr:Array<any>=[]
  constructor(private http:HttpClient ) { }

  departmentarr:Array<any>=[]
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
