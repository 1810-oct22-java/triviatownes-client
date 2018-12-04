import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { LeaderboardPageComponent } from './leaderboard-page/leaderboard-page.component';
import { ServerLobbyComponent } from './server-lobby/server-lobby.component';
import { WaitingComponent } from './waiting-page/waiting/waiting.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent,
    ServerLobbyComponent,
    LandingPageComponent,
    LeaderboardPageComponent,
    WaitingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
