import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutForm;

  constructor(
    private sportsService: SportsService,
    private formBuilder: FormBuilder
  ) {
    this.aboutForm = this.formBuilder.group({
      description: '',
      location: '',
      team: ''
    });
  }

  onSubmit(info) {
    this.sportsService.saveAboutInfo(info);
  }

  ngOnInit() {}
}
