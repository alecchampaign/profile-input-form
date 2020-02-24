import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  submitData() {
    console.log('Sending data');
    return this.http.post(
      'localhost:4000/profile',
      JSON.stringify({
        basicInfo: this.basicInfo,
        aboutInfo: this.aboutInfo,
        socialInfo: this.socialInfo
      })
    );
  }

  constructor(private http: HttpClient) {}
}
