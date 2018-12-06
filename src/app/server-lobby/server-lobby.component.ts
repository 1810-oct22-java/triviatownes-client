// import { Component, OnInit } from '@angular/core';
// import { LobbyInfoService } from '../lobby-info.service';
// import { DataTableDirective, DataTablesModule } from 'angular-datatables';
// import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
// import { Subject } from 'rxjs';

// @Component({
//   selector: 'app-server-lobby',
//   templateUrl: './server-lobby.component.html',
//   styleUrls: ['./server-lobby.component.scss']
// })
// export class ServerLobbyComponent implements OnInit, AfterViewInit, OnDestroy {

//   @ViewChild(DataTableDirective)

//   dtElement: DataTableDirective;

//   dtOptions: DataTables.Settings;

//   dtTrigger: any = new Subject();

//   lobinfo: any = [
//     {
//       lobbyName: 'Lobby 1',
//       Category: 'Math',
//       lobbyStatus: 'Public',
//       Seats: '4/10',
//     },
//     {
//       lobbyName: 'Lobby 2',
//       Category: 'Science',
//       lobbyStatus: 'Private',
//       Seats: '5/10',
//     },
//     {
//       lobbyName: 'Lobby 3',
//       Category: 'Biology',
//       lobbyStatus: 'Private',
//       Seats: '9/10',
//     },
//   ];

//   // elements: any [];

//   // populate elements with lobby info from API
//   // lobbyName, category, lobbyStatus, Seats
//   lobbyInf: any [];
//   constructor(

//     public dataInfo: LobbyInfoService,
//     public router: Router,
//     private http: HttpClient

//   ) { }

//   ngAfterViewInit(): void {
//     this.dtTrigger.next();

//     $('#datatable-custom-search').on('input', function() {
//       var newText = $(this).val() + "";
//       self.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//         dtInstance.search(newText).draw();
//       });
//     });

//   }

//   ngOnDestroy(): void {

//     // Do not forget to unsubscribe the event
//     this.dtTrigger.unsubscribe();
//   }

//   rerender(): void {

//     console.log('before render');
//     var self = this;

//     this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
//       // Destroy the table first
//       dtInstance.destroy();
//       // Call the dtTrigger to rerender again
//       this.dtTrigger.next();
//     });

//     console.log('after render');

//   }

//   ngOnInit() {

//     // this.http.get(this.dataInfo.getAPI() + 'get-all-lobby-info').subscribe((data: any[]) => this.lobbyInf = data);
//     this.loadServers();

//     var table = $('#lobbyList').DataTable({
//       //  searching set to false
      
//       // hide entries
//       bLengthChange: false,
//       responsive: true,
//       data: this.lobinfo,
//       columns: [
//         {
//           data: 'lobbyName'
//         },
//         {
//           data: 'Category'
//         },
//         {
//           data: 'lobbyStatus'
//         },
//         {
//           data: 'Seats'
//         },
//         // create three buttons columns
//         {
//           defaultContent: '<button id="showLobby" class="btn btn-indigo btn-sm m-0">Join</button>'
//         }
//       ],
//       language: {
//         search: '_INPUT_',
//         searchPlaceholder: 'Find a lobby..',
//       }
//     });

//     var getTable = this;

//     // unbind previous event on tbody so that multiple events are not binded to the table whenever this function runs again
//     $('#lobbyInfo tbody td').unbind();

//     // defined jquery click event
//     $('#lobbyInfo tbody td').on('click', 'button', function () {

//       // the "this" in this function is "this" of jquery object not of component because we did not use an arrow function

//       // get row for data
//       var tr = $(this).closest('tr');
//       var row = table.row(tr);
//       // this of jquery object
//       if (this.className == 'getLobby') {
//         // use function of current class using reference
//         getTable.showValue(row.data().lobbyName);
//       }
//     });


//   }

//   showValue(value) {
//     alert(value);
//   }

//   loadServers(): void {

//     // this.dtOptions = {};

//     $.ajax({
//       url: 'http://api.com/get-all-lobby-info',
//       // url: this.dataInfo.getAPI() +'get-all-lobby-info',

//       data: {
//          format: 'json'
//       },

//       dataType: 'jsonp',
//       success: function(data) {



//       },
//       type: 'GET'
//     });

//   }

// }

import { Component, OnInit } from '@angular/core';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Router } from '@angular/router';
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

  maxPages: number;
  currentPage: number;

  lobbyInf: any [];
  constructor(

    public router: Router

  ) { }

  ngAfterViewInit(): void {

    var self = this;
    this.dtTrigger.next();

    $('#datatable-custom-search').on('input', function() {
      var newText = $(this).val() + "";
      self.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.search(newText).draw();
      });
    });
    $('#datatable-custom-prev-btn').on('click', function() {
      self.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.page('previous').draw('page');
      });
    });
    $('#datatable-custom-next-btn').on('click', function() {
      self.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.page('next').draw('page');
      });
    });

  }

  ngOnDestroy(): void {

    this.dtTrigger.unsubscribe();
  }

  rerender(): void {

    console.log('before render');
    var self = this;

    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();


    });

  }

  ngOnInit() {

    this.loadServers();

      // var table = $('#lobbyList').DataTable({
      // //  searching set to false
      // bLengthChange: false

      // });

  }

  loadServers(): void {

    var self = this;

    this.dtOptions = {};

    // hides default search, pagination stuff
    this.dtOptions.dom = '<t>';

    this.dtOptions.pageLength = 10;

    this.dtOptions.drawCallback = function(){

      self.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

        self.maxPages = dtInstance.page.info().pages;
        self.currentPage = dtInstance.page.info().page + 1;

        $('#datatable-custom-next-btn').prop("enabled",false);
        $('#datatable-custom-prev-btn').prop("enabled",false);

        if(self.currentPage == self.maxPages){
          $('#datatable-custom-next-btn').prop("enabled",true);
        }
        if(self.currentPage == 1){
          $('#datatable-custom-prev-btn').prop("enabled",true);
        }
        if(self.maxPages == 0){
          $('#datatable-custom-next-btn').prop("enabled",true);
          $('#datatable-custom-prev-btn').prop("enabled",true);
          $('#datatable-custom-page-label').val("0/0");
        } else {
          $('#datatable-custom-page-label').prop("disabled", true);
          $('#datatable-custom-page-label').val(self.currentPage + "/" + self.maxPages);
        }
      });
    }
  }
}



