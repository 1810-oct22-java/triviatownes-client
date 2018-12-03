import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  categories = ['Science', 'Art', 'History', 'Sports', 'Nature', 'Geo', 'Cars', 'Lit', 'New'];
  
  apiUrl: String = "http://localhost:8080/TriviaTownesServer/";

  constructor() { }

  ngOnInit() {
    this.newUser();
  }


  //call when a user hits landing page
  newUser(){
    
    $.ajax({
      url: this.apiUrl + "new-user",
      method: "GET",
      crossDomain : true,
      success: function (result) {
        console.log("is worked");
      },
      xhrFields: {
        withCredentials: true
      },
    });
  }

  /*
  * Sends pin to servlet
  */
  joinLobby() {
    var pin = $('#pin').val();
    console.log(pin);
    $.ajax({
      url: "/connect-to-lobby",
      method: "POST",
      data: {pin}
    }).then(function successCallback(response) {
      //load lobby
      
  }, function errorCallback(response) {
      //Send user wrong pin error message
      alert("A room with that pin does not exist");
});
  }
  pickCategory(cat) {
    console.log("picking cat " + cat);
    //get cat and send it in post

    $.ajax({
      url: "selectLobby",
      method: "POST",
      data: {cat}
    }).then(function successCallback(response) {
      //load lobby
      
  }, function errorCallback(response) {
      //Send user wrong pin error message
      alert("There was a problem finding that room");
});
  }


}
