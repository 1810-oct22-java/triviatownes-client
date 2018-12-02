import { Component, OnInit, ViewChild } from '@angular/core';
import { LobbyInfoService } from '../lobby-info.service';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-server-lobby',
  templateUrl: './server-lobby.component.html',
  styleUrls: ['./server-lobby.component.scss']
})
export class ServerLobbyComponent implements OnInit {

  // @ViewChild(DataTableDirective) datatable: DataTableDirective;

  dtOptions: DataTables.Settings = {};

  // elements: any [];

  // populate elements with lobby info from API
  // lobbyName, category, lobbyStatus, Seats
  lobbyInf: any [];
  constructor(

    public dataInfo: LobbyInfoService,
    public router: Router,
    private http: HttpClient

  ) { }

  ngOnInit() {

    // this.dtOptions = {

    //   pagingType: 'full_numbers'

    // };

    this.http.get(this.dataInfo.getAPI() + 'get-all-lobby-info').subscribe((data: any[]) => this.lobbyInf = data);
  // this.loadServers();

  }

  // loadServers(): void {

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




