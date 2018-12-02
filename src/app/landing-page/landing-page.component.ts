import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

  /*
  * Sends pin to servlet
  */
  joinLobby() {
    var pin = $('#pin').val();
    console.log(pin);
    $.ajax({
      url: "lobby",
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
