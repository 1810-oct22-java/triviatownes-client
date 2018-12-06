import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WaitingService } from '../waiting.service';
import { ThrowStmt } from '@angular/compiler';
import { stringify } from '@angular/core/src/util';

@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.scss']
})
export class WaitingPageComponent implements OnInit {

  index = 1;
  rowCount = 1;
  playerList: Player[] = [];
  user: string[];

  constructor() { }

  ngOnInit() {
    
    this.loadDummyData();

    //this.loadServer();
    //this.loadPlayerList();
   this.triggerModalButton();
  
  }

  

  

  loadDummyData() {
    this.user = ['Player1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'];
    for (let u of this.user) {
  
      var element = u;
      var row = $(`<tr id="${this.index}"></tr>`);
      $('#tableBody').append(row)
      let newItem = $(`<td style="font-size: 30px; color: red">${element}</td>`);
      $(`#${this.index}`).append(newItem);
      if (this.rowCount == 4 ) {
          this.index++;
          this.rowCount = 1;
      } else {
          this.rowCount++;
      }
    }
    
  }

  

 triggerModalButton() {
   window.onload = function() {
     $('#trigger_modal_button').click();
   }
 }

 navigate() {
  
 }

 

 // add player to the table
  addPlayer() {
    
    var element = $('#username').val();
    var row = $(`<tr id="${this.index}"></tr>`);
    $('#tableBody').append(row)
    let newItem = $(`<td style="font-size: 30px; color: red; font-family: Courier">${element}</td>`);
    $(`#${this.index}`).append(newItem);
    if (this.rowCount == 4 ) {
        this.index++;
        this.rowCount = 1;
    } else {
        this.rowCount++;
    }
    this.user.push(`$('#username').val()`);
    
}



loadPlayerList() {
  for (let p of this.playerList) {

    var element = p.getUsername();
    var row = $(`<tr id="${this.index}"></tr>`);
    $('#tableBody').append(row)
    let newItem = $(`<td style="font-size: 30px; color: red">${element}</td>`);
    $(`#${this.index}`).append(newItem);
    if (this.rowCount == 4 ) {
        this.index++;
        this.rowCount = 1;
    } else {
        this.rowCount++;
    }
  }
  
}
  
//load data from server
  // loadServer() {
  //   $.ajax({
  //     type: 'get',
  //     url: this.service.getApiUrl(),
  //     success: function(response, status) {
  //       this.playerList = response;
        
  //        for ( let s of this.playerList) {
  //         var element = s.username;
  //         var row = $(`<tr id="${this.index}"></tr>`);
  //         $('#tableBody').append(row)
  //         let newItem = $(`<td style="font-size: 30px; color: red; font-family: Courier">${element}</td>`);
  //         $(`#${this.index}`).append(newItem);
  //         if (this.rowCount == 4 ) {
  //             this.index++;
  //             this.rowCount = 1;
  //         } else {
  //             this.rowCount++;
  //         }
  //        }
  //     },
  //     error: function(status, statusText) {
  //       console.log(`Error: ${status}: ${statusText}`);
  //     }
  //   })
  // }


}
