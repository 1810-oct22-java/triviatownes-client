import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  categories = ['Science', 'Art', 'History', 'Sports', 'Nature', 'Geo', 'Cars', 'Lit', 'New'];

  constructor(
    public envconsts: GlobalsService,
    public router: Router,
    public globals: GlobalsService
  ) { }

  ngOnInit() {
    this.newUser();
  }


  // call when a user hits landing page
  newUser() {

    $.ajax({
      url: this.globals.getApiUrl() + 'new-user',
      method: 'GET',
      crossDomain: true,
      xhrFields: { withCredentials: true },
      success: function (result) {
        console.log('Created Session');
      },
      error: function (result) {
        console.log('Something went wrong');
        console.log(result);
      }
    });
  }

  /*
  * Sends pin to servlet
  */
  joinLobby() {
    const pin = $('#pin').val();
    console.log(pin);
    $.ajax({
      url: '/connect-to-lobby',
      method: 'POST',
      data: { pin },
      success: function (response) {
        this.router.navigate(['/waiting']);
      },
      error: function (response) {
        alert('There was a problem connecting to lobby...');
      }
    });
  }

  selectCategory(cat) {
    this.globals.setCategory(cat);
    this.router.navigate(['/server-lobby']);
  }

}
