import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  basicInfo;

  getSports() {
    return this.http.get('/assets/sports.json');
  }

  getCountries() {
    return this.http.get('/assets/countries.json');
  }

  saveBasicInfo(info) {
    this.basicInfo = info;
    console.log(this.basicInfo);
  }

  constructor(private http: HttpClient) {}
}
