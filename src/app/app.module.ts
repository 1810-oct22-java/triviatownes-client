import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import * as $ from 'jquery';
import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LeaderboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
