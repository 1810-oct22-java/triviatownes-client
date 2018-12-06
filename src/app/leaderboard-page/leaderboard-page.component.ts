import { Component, OnInit } from '@angular/core';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Router } from '@angular/router';
import { AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

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

  leaders: { name: string, score: number } [];

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
    const self = this;

    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();

      
    });

  }

  ngOnInit() {
    //this.dummyData();
    this.loadServers();

  }

  loadServers(): void {

    var self = this;

    this.dtOptions = {}

    this.dtOptions.pageLength = 10;

    this.dtOptions.dom = "<t>";

    this.dtOptions.drawCallback = function(){

      self.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {

        self.maxPages = dtInstance.page.info().pages;
        self.currentPage = dtInstance.page.info().page + 1;

        $('#datatable-custom-next-btn').prop("disabled",false);
        $('#datatable-custom-prev-btn').prop("disabled",false);

        if(self.currentPage == self.maxPages){
          $('#datatable-custom-next-btn').prop("disabled",true);
        }
        if(self.currentPage == 1){
          $('#datatable-custom-prev-btn').prop("disabled",true);
        }
        if(self.maxPages == 0){
          $('#datatable-custom-next-btn').prop("disabled",true);
          $('#datatable-custom-prev-btn').prop("disabled",true);
          $('#datatable-custom-page-label').val("0/0");
        } else {
          $('#datatable-custom-page-label').val(self.currentPage + "/" + self.maxPages);
        }
      });

      $('#lobbyList_paginate').addClass('hide_elements');
    }


  }

  // dummyData(){
  //   for(let i = 1; i < 100; i++){
  //     this.leaders[i] = {
  //       name: "dang",
  //       score: i
  //     }
  //   }
  // }

  getLeaders(){
    $.ajax({
      url: '/', success: function (result) {
        this.leaders = $.parseJSON(result.value());
      }
    });
  }

}
