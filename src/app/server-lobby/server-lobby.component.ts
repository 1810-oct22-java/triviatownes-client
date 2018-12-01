import { Component, OnInit, ViewChild } from '@angular/core';
import { LobbyInfoService } from '../lobby-info.service';
import { DataTableDirective } from 'angular-datatables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-lobby',
  templateUrl: './server-lobby.component.html',
  styleUrls: ['./server-lobby.component.scss']
})
export class ServerLobbyComponent implements OnInit {

  @ViewChild(DataTableDirective) datatable: DataTableDirective;

  dtOptions: DataTables.Settings;


  constructor(

    // public dataInfo: LobbyInfoService,
    // public router: Router

  ) { }

  ngOnInit() {

    // this.loadServers();

  }

  // loadServers(): void {

  //   const self = this;

  //   this.dtOptions = {

  //     ajax: {

  //       url: this.dataInfo.getAPI() + 'get-all-lobby-info',
  //       type: 'GET',
  //       complete: function(settings, json) {

  //       }
  //     },
  //       columns: [

  //         {
  //           title: 'Lobby Name',
  //           data: 'lobbyName'
  //         },
  //         {
  //           title: 'Category',
  //           data: 'category'
  //         },
  //         {
  //           title: 'Public/Private',
  //           data: 'lobbyStatus'
  //         },
  //         {
  //           title: 'Seats',
  //           data: 'seats'
  //         }

  //       ]
  //   };


  // }

}




