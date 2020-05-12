import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8000/api/hospital/department/'
const baseurl1='http://localhost:8000/api/appointment'
@Injectable({
  providedIn: 'root'
})


export class FunctionalService {

  constructor(private http: HttpClient) { }
  findAppointment(){
    return this.http.get(baseurl1);
  }

  findDept(){
    return this.http.get(baseUrl);
  }


  addDept(department: any){
    console.log('In service : ', department)
    return this.http.post(baseUrl, 
      department,{observe : 'response'})

  }
  
}