import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SportsService {
  basicInfo;
  aboutInfo;
  socialInfo;

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

  saveAboutInfo(info) {
    this.aboutInfo = info;
    console.log(this.aboutInfo);
  }

  saveSocialInfo(info) {
    this.socialInfo = info;
    console.log(this.socialInfo);
  }

  constructor(private http: HttpClient) {}
}
