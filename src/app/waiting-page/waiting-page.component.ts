import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat';
import { Chats } from '../chats';

@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.scss']
})
export class WaitingPageComponent implements OnInit {

  chats = Chats;
  selectedChat: Chat;

  public chatArr = [];

  constructor() { }

  ngOnInit() {
  }

  users: String[] = ['Player1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'];

  addPlayer() {

    var element = $('#username').val();
    let newItem = $(`<td>${element}</td>`);

        $('#tableRow').append(newItem);
  }


  // getPlayers() {
  //   $.ajax({
  //     type: 'get',
  //     url: this.url,
  //     success: function(response, status) {
  //       this.players = response;
  //       console.log(this.players);
  //       // append players to table
  //     },
  //     error: function(status, statusText) {
  //       console.log(`Error: ${status}: ${statusText}`);
  //     }
  //   })
  // }

}
