import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const baseUrl = 'http://localhost:8000/api/hospital/'
const url = '/department'
const baseurl1 = 'http://localhost:8000/api/appointment/'
@Injectable({
  providedIn: 'root'
})


export class FunctionalService {
  deleteAppointment(id: number) {
    return this.http.delete(baseurl1 + id, { observe: 'response' })
  }

  constructor(private http: HttpClient) { }
  findAppointment() {
    return this.http.get(baseurl1);
  }

  sendAppointment(body: any) {
    console.log(body);
    return this.http.post(baseurl1, body, { observe: 'response' })
  }
  updateAppointment(i: number, body: any) {
    return this.http.put(baseurl1+i,
      body, { observe: 'response' })
  }
  hospitalByName(hospital: any) {
    return this.http.get(baseUrl + hospital);
  }

  findDept(hospitalname1: any) {
    return this.http.get(baseUrl + hospitalname1 + url);
  }


}