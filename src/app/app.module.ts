import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { SportsService } from './sports.service';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: BasicInfoComponent },
      { path: '/about', component: AboutComponent }
    ])
  ],
  declarations: [AppComponent, BasicInfoComponent, AboutComponent],
  bootstrap: [AppComponent],
  providers: [SportsService]
})
export class AppModule {}
