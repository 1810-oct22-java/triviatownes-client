import { Component, OnInit } from '@angular/core';
import { LobbyInfoService } from '../lobby-info.service';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-server-lobby',
  templateUrl: './server-lobby.component.html',
  styleUrls: ['./server-lobby.component.scss']
})
export class ServerLobbyComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DataTableDirective)

  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings;

  dtTrigger: any = new Subject();

  // elements: any [];

  // populate elements with lobby info from API
  // lobbyName, category, lobbyStatus, Seats
  lobbyInf: any [];
  constructor(

    public dataInfo: LobbyInfoService,
    public router: Router,
    private http: HttpClient

  ) { }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {

    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {

    console.log('before render');
    const self = this;

    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });

    console.log('after render');

  }

  ngOnInit() {

    // this.dtOptions = {

    //   pagingType: 'full_numbers'

    // };

    // this.http.get(this.dataInfo.getAPI() + 'get-all-lobby-info').subscribe((data: any[]) => this.lobbyInf = data);
    this.loadServers();

  }
  // loadServers(): void {

    // $.ajax({
    //   url: 'http://api.com/get-all-lobby-info',
    //   // url: this.dataInfo.getAPI() +'get-all-lobby-info',

    //   data: {
    //      format: 'json'
    //   },

    //   dataType: 'jsonp',
    //   success: function(data) {

    //     var $lobbyName = data.lobbyName;
    //     var $category = data.Category;
    //     var $lobbyStatus = data.lobbyStatus;
    //     var $seats = data.seats;

    //   },
    //   type: 'GET'
    // });

  // }

  loadServers(): void {

    this.dtOptions = {

    };


  }

}




