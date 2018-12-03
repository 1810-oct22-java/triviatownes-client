import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';
import { ServerLobbyComponent } from './server-lobby/server-lobby.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerLobbyComponent,
    LandingPageComponent,
    LeaderboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
