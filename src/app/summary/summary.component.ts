import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';

@Component({
  selector: 'app-summary',
  templateUrl: 'summary.component.html'
})
export class SummaryComponent implements OnInit {
  aboutInfo;
  socialInfo;
  basicInfo;

  constructor(private sportsService: SportsService) {
    this.aboutInfo = sportsService.aboutInfo;
    this.socialInfo = sportsService.socialInfo;
    this.basicInfo = sportsService.basicInfo;
  }

  submitData() {
    this.sportsService.submitData();
  }

  ngOnInit() {}
}
