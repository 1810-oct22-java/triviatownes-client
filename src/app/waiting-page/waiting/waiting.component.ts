import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiting',
  templateUrl: './waiting.component.html',
  styleUrls: ['./waiting.component.scss']
})
export class WaitingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

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
