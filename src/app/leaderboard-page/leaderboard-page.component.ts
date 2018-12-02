import { Component, OnInit } from '@angular/core';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Router } from '@angular/router';
import { AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-leaderboard-page',
  templateUrl: './leaderboard-page.component.html',
  styleUrls: ['./leaderboard-page.component.scss']
})
export class LeaderboardPageComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(DataTableDirective)

  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings;

  dtTrigger: any = new Subject();

  leaders: any [];


  lobbyInf: any [];
  constructor(

    public router: Router

  ) { }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
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

    console.log('after render');

  }

  ngOnInit() {

    this.loadServers();

  }

  loadServers(): void {

    this.dtOptions = {

    };


  }

  getLeaders(){
    $.ajax({
      url: "/", success: function (result) {
        this.leaders= $.parseJSON(result.value());
      }
    });
  }

}
