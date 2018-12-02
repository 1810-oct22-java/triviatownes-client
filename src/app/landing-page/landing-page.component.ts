import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  categories = ['Science', 'Art', 'History', 'Sports', 'Nature', 'Geo', 'Cars', 'Lit', 'New'];
  constructor() { }

  ngOnInit() {
  }


  //call when a user hits landing page
  newUser(){
    $.ajax({
      url: "/", success: function (result) {
        //load lobby
      }
    });
  }

  joinLobby() {
    $.ajax({
      url: "/connect-to-lobby", success: function (result) {
        //load lobby
      }
    });
  }
  pickCategory() {
    //get cat and send it in post

    $.ajax({
      url: "tbd", success: function (result) {
        //create and load lobby based on cat
      }
    });
  }


}
