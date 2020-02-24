import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-info',
  templateUrl: 'basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  sports;
  countries;
  basicInfoForm;

  constructor(
    private sportsService: SportsService,
    private formBuilder: FormBuilder
  ) {
    this.basicInfoForm = this.formBuilder.group({
      name: '',
      sport: '',
      nationality: '',
      gender: '',
      birthDate: ''
    });
  }

  onSubmit(info) {
    this.sportsService.saveBasicInfo(info);
  }

  ngOnInit() {
    this.sports = this.sportsService.getSports();
    this.countries = this.sportsService.getCountries();
  }
}
