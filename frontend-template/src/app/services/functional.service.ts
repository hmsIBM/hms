import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8000/api/hospital/'
const url = '/department'


@Injectable({
  providedIn: 'root'
})


export class FunctionalService {

  constructor(private http: HttpClient) { }

  hospitalByName(hospital: any){
    return this.http.get(baseUrl+hospital);
  }

  findDept(hospitalname1: any){
    return this.http.get(baseUrl+hospitalname1+url);
  }

  
}