import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8000/api/hospital/department/'

@Injectable({
  providedIn: 'root'
})


export class FunctionalService {

  constructor(private http: HttpClient) { }

  findDept(){
    return this.http.get(baseUrl);
  }


  addDept(department: any){
    console.log('In service : ', department)
    return this.http.post(baseUrl, 
      department,{observe : 'response'})

  }
  
}