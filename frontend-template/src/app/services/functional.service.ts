import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8080/api/hospital/'
const url= '/department'
const baseurl1='http://localhost:8080/api/appointment'
@Injectable({
  providedIn: 'root'
})


export class FunctionalService {

  constructor(private http: HttpClient) { }
  findAppointment(){
    return this.http.get(baseurl1);
  }

  hospitalByName(hospital: any){
    return this.http.get(baseUrl+hospital);
  }

  findDept(hospitalname1: any){
    return this.http.get(baseUrl+hospitalname1+url);
  }

  addDept(hospitalname2: any){
    console.log(hospitalname2);
    return this.http.put('http://localhost:8080/api/hospital/max hospital/department', hospitalname2, {observe : 'response'});
    
  }

  
}