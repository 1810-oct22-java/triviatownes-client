import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StompService } from '@stomp/ng2-stompjs';
import { Message, StompHeaders } from '@stomp/stompjs';
import { Subscription, Observable } from 'rxjs';

import { GlobalsService } from '../globals.service';

@Component({
  selector: 'app-waiting-page',
  templateUrl: './waiting-page.component.html',
  styleUrls: ['./waiting-page.component.scss']
})
export class WaitingPageComponent{
/*
  users: String[] = ['Player1', 'Player 2', 'Player 3', 'Player 4', 'Player 5'];

  // Stream of messages
  private data_subscription: Subscription;
  public data_observable: Observable<Message>;

  private _stompService: StompService;

  private gameCategory;
  private gameNumberOfQuestion;
  private gameName;

  private disconnectOk = false;

  users: any;

  // Subscription status
  public subscribed = false;

  StompConfig = {
    url: 'ws://192.168.0.45:8080/TriviaTownesServer/join-waiting-lobby',
    headers: {},
    heartbeat_in: 0, // Typical value 0 - disabled
    heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
    reconnect_delay: 0,
    debug: true // Will log diagnostics on console
  };

  connect() {
    this._stompService = new StompService(this.StompConfig);
    this._stompService.initAndConnect();

    this.data_observable = this._stompService.subscribe('/waiting/' + this.globals.getLobbyKey().toLowerCase() + '/send-waiting');
    this.data_subscription = this.data_observable.subscribe(this.onUpdate);
    this.subscribed = true;
    
    this.startPingingServer(this);
  }

  public startPingingServer(self: any) {

    if(self.subscribed){
      self._stompService.publish('/waiting-update/' + self.globals.getLobbyKey() + '/update-waiting');
      setInterval(this.startPingingServer, 500, self);
    }
  }

  public onUpdate = (data_observable: Message) => {

    const payload =  JSON.parse(data_observable.body);

    console.log(payload);

    console.log(payload['status']);

    this.users = payload['players'];
    console.log(this.users[0]['username']);
    if (payload['status'] === 1) {
      this.unsubscribe();
      this.router.navigate(['game']);
    }
  }

  public startGame(): void {

    const self = this;

    $.ajax({
      url: self.globals.getApiUrl() + 'start-game-connect',
      method: 'POST',
      data: {
        key: self.globals.getLobbyKey()
      },
      crossDomain: true,
      xhrFields: { withCredentials: true },
      success: function (res) {
        self.unsubscribe();
        self.disconnectOk = true;
        self.router.navigate(['game']);
      },
    });
  }

  public disconnect(): void {

    const self = this;

    if (!this.disconnectOk) {
      $.ajax({
        url: self.globals.getApiUrl() + 'disconnect',
        method: 'GET',
        crossDomain: true,
        xhrFields: { withCredentials: true }
      });
    }
  }


  constructor(
    public router: Router,
    public globals: GlobalsService
  ) { }

  ngOnInit() {
    if(!this.globals.getLobbyKey()){
      this.router.navigate(['']);
      return;
    } else {
      this.gameCategory = this.globals.getGameCategory();
      this.gameName = this.globals.getLobbyName();
      this.gameNumberOfQuestion = this.globals.getLobbyQuestions();

      console.log(this.gameCategory);
      console.log(this.gameNumberOfQuestion);
      this.connect();
    }
  }

  ngOnDestroy(): void {
    this.disconnect();
    this.unsubscribe();
  }

  public unsubscribe() {
    this.data_subscription = null;
    this.data_observable = null;
    //this._stompService.disconnect();
    if(this.subscribed){
      this._stompService.deactivate();
      this.subscribed = false;
    }
    //this._stompService.
  }

*/
}
