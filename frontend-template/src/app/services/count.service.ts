import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl="http://localhost:8080/api/hospital/";


@Injectable({
  providedIn: 'root'
})

export class CountService {

 
  constructor(private http:HttpClient) { }


  fetchCount(){
    console.log("inside service");
    return this.http.get(baseUrl+"max hospital/count");
  }
 
  loadData(){
    console.log("inside loadData service");
    return this.http.get(baseUrl+"max hospital/department");
  }
  


}




