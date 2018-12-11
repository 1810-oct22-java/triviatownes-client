import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';

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
export class WaitingPageComponent implements OnInit, OnDestroy {

  // Stream of messages
  private data_subscription: Subscription;
  public data_observable: Observable<Message>;

  private _stompService: StompService;

  users: any;

  // Subscription status
  public subscribed = false;

  StompConfig = {
    url: 'ws://127.0.0.1:8080/TriviaTownesServer/join-waiting-lobby',
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

    self._stompService.publish('/waiting-update/' + self.globals.getLobbyKey() + '/update-waiting');
    setInterval(this.startPingingServer, 2000, self);
  }

  public onUpdate = (data_observable: Message) => {

    const payload =  JSON.parse(data_observable.body);

    console.log(payload);

    this.users = payload['players'];
    console.log(this.users[0]['username']);
    if (payload['status'] === 'ready') {
      this.router.navigate(['game']);
    }
  }


  constructor(
    public router: Router,
    public globals: GlobalsService
  ) { }

  ngOnInit() {
    this.globals.setLobbyKey('0');
    this.connect();
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  public unsubscribe() {
    if (!this.subscribed) {
      return;
    }
    this.data_subscription = null;
    this.data_observable = null;
    this.subscribed = false;
  }
}
