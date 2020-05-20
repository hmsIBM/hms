import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// const baseUrl = 'http://localhost:8000/api/hospital/'
const url = '/department'
// const baseurl1 = ' http://localhost:8080/api/hospital/max hospital/appointment/'
// const baseUrl = 'http://localhost:8080/api/hospital/'
// const url= '/department'
// const baseurl1='http://localhost:8080/api/appointment'

@Injectable({
  providedIn: 'root'
})


export class FunctionalService {
  name:string=''
  // baseurl1:string=  'http://localhost:8080/api/hospital/'+this.name+'/appointment/'
  // baseUrl:string = 'http://localhost:8080/api/hospital/'
  // baseUr2:string = 'http://localhost:8080/api/hospital/'+this.name+'/department'
  constructor(private http: HttpClient) { }
  
  findAppointment() {
    let baseurl1:string=  'http://localhost:8080/api/hospital/'+this.name+'/appointment/'
    return this.http.get(baseurl1);
  }

  sendAppointment(body: any) {
    let baseurl1:string=  'http://localhost:8080/api/hospital/'+this.name+'/appointment/'
    console.log(body);
    return this.http.post(baseurl1, body, { observe: 'response' })
  }
  updateAppointment(i: number, body: any) {
    let baseurl1:string=  'http://localhost:8080/api/hospital/'+this.name+'/appointment/'
    return this.http.put(baseurl1+i,
      body, { observe: 'response' })
  }
  deleteAppointment(id: number) {
    let baseurl1:string=  'http://localhost:8080/api/hospital/'+this.name+'/appointment/'
    return this.http.delete(baseurl1 + id, { observe: 'response' })
  }
  // hospitalByName(hospital: any) {
  //   return this.http.get(this.baseUrl + hospital);
  // }

  findDept() {
    let baseUrl:string = 'http://localhost:8080/api/hospital/'
    return this.http.get(baseUrl + this.name + url);
  }


  addDept(hospitalname2: any){
    console.log(hospitalname2);
    let baseUr2:string = 'http://localhost:8080/api/hospital/'+this.name+'/department'
    return this.http.put(baseUr2, hospitalname2, {observe : 'response'});
    
  }

  
}