import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-social',
  templateUrl: 'social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  socialForm;

  constructor(
    private sportsService: SportsService,
    private formBuilder: FormBuilder
  ) {
    this.socialForm = this.formBuilder.group({
      twitter: '',
      facebook: '',
      instagram: ''
    });
  }

  onSubmit(info) {
    this.sportsService.saveSocialInfo(info);
  }

  ngOnInit() {}
}
