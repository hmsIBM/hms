import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl="http://localhost:8080/api/hospital/";


@Injectable({
  providedIn: 'root'
})

export class CountService {

 
  constructor(private http:HttpClient) { }


  fetchCount(value:any){
    console.log("inside service");
    return this.http.get(baseUrl+value+"/count");
  }
 
  loadData(value:any){
    console.log("inside loadData service");
    return this.http.get(baseUrl+value+"/department");
  }
  


}




