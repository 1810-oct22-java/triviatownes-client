import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Router } from '@angular/router';
import { AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { GlobalsService } from '../globals.service';
import { FormsModule } from '@angular/forms';

import { StompService } from '@stomp/ng2-stompjs';
import { Message, StompHeaders } from '@stomp/stompjs';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {
  // Hardcode a QuestionBean
  jsonString: string = '{"isMultipleChoice":true, "category":"geography", "difficulty":"easy", "question":"Which small country is located between the borders of France and Spain?", "correctIndex":2, "answers":["Vatican City", "San Marino", "Andorra", "Lichtenstein"]}';
  // properties of each question
  payload: object;
  questionObj: object;
  isMultipleChoice: boolean;
  category: string;
  difficulty: number;
  question: string;
  correctIndex: number;
  answers: string[];

  // Hardcore time
  currentTime = 20;

  currentQuestionNumber;
  totalQuestions;
  progressPercent: number;
  progress;

  // Player properties
  didAnswer = false;
  displayMsg: string;
  points: number;

  players: number = 0;

  currentAnswers: number = 0;


  // Stream of messages
  private data_subscription: Subscription;
  public data_observable: Observable<Message>;

  private _stompService: StompService;

  // Subscription status
  public subscribed = false;

  StompConfig = {
    url: 'ws://127.0.0.1:8080/TriviaTownesServer/join-game-session',
    headers: {},
    heartbeat_in: 0, // Typical value 0 - disabled
    heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
    reconnect_delay: 0,
    debug: true // Will log diagnostics on console
  };

  public onDataUpdate = (data_observable: Message) => {

    const payload = JSON.parse(data_observable.body);
    console.log(payload);

    if (this.question !== this.decodeHtml(payload['currentQuestion']['question'])) {
      this.currentQuestionNumber = payload['currentQuestionNumber'];
      this.totalQuestions = payload['numberOfQuestions'];
      this.question = this.decodeHtml(payload['currentQuestion']['question']);
      this.answers = payload['currentQuestion']['answers'];

      for (let i = 0; i < this.answers.length; i++) {
        this.answers[i] = this.decodeHtml(this.answers[i]);
      }

      this.isMultipleChoice = payload['currentQuestion']['multipleChoice'];
      this.correctIndex = payload['currentQuestion']['correctIndex'];
      this.didAnswer = false;
      const diff = payload['currentQuestion']['difficulty'];
      this.setDifficulty(diff);
      this.loadProgressBar();
    }

    // These need to be updated every refresh
    this.currentAnswers = payload['numberOfAnswers'];
    this.currentTime = payload['currentCountDown'];
    this.players = payload['players'];

    // Needsto be checked every time
    if (payload['status'] === 2) {
      this.unsubscribe();
      console.log('game over');
    }
  }

  public decodeHtml(html) {
    return $('<div>').html(html).text();
}

  initGame() {

    const self = this;

    $.ajax({
      url: self.globals.getApiUrl() + 'start-game',
      method: 'POST',
      data: {
        key: self.globals.getLobbyKey()
      },
      crossDomain: true,
      xhrFields: { withCredentials: true },
      success: function (res) {
        console.log('Game has started');
      }
    });
  }


  sendAnswer() {

    const self = this;

    $.ajax({
      url: self.globals.getApiUrl() + 'game-update',
      method: 'POST',
      data: {
        playerId: self.globals.getUserId(),
        lobbyKey: self.globals.getLobbyKey(),
        points: this.points
      },
      crossDomain: true,
      xhrFields: { withCredentials: true },
      success: function (res) {
        console.log('Submitted Answer');
      }
    });

  }


  connect() {
    this._stompService = new StompService(this.StompConfig);
    this._stompService.initAndConnect();

    this.data_observable = this._stompService.subscribe('/send-game-update/' + this.globals.getLobbyKey() + '/get-game-data');
    this.data_subscription = this.data_observable.subscribe(this.onDataUpdate);
    this.subscribed = true;

    // Only ping the server if it's the leader
    if (this.globals.getIsLeader()) {
      this.startPingingServer(this);
    }
  }

  public startPingingServer(self) {

    if (self.subscribed) {
      console.log('ping');
      self._stompService.publish('/game-update/' + self.globals.getLobbyKey() + '/get-game-data', '');
      setInterval(this.startPingingServer, 500, self);
    }
  }

  public unsubscribe() {
    this.data_subscription = null;
    this.data_observable = null;
    this.subscribed = false;
    this._stompService.deactivate();
  }


  constructor(
    private sanitizer: DomSanitizer,
    public router: Router,
    public globals: GlobalsService
  ) { }

  ngOnInit() {
    this.loadQuestion();
    this.loadProgressBar();

    this.connect();

    if (this.globals.getIsLeader()) {
      this.initGame();
    }
  }

  
  loadQuestion(){
    //this.questionObj = this.payload['QuestionBean'];
    //this.questionObj = JSON.parse(this.jsonString);
    //console.log(this.questionObj);
    //this.isMultipleChoice = this.questionObj['isMultipleChoice'];
    this.isMultipleChoice = true;
    //this.category = this.questionObj['category'];
    this.category = "sports";
    //this.setDifficulty();
    //this.question = this.questionObj['question'];
    this.question = "This question";
    //this.correctIndex = this.questionObj['correctIndex'];
    //this.answers = this.questionObj['answers'];
    this.answers = [
      "Hello",
      "Jie",
      "test",
      "Be"
    ]
  }

  // Set difficulty multiplier
  setDifficulty(diff: string) {
    if (diff === 'easy') {
      this.difficulty = 30;
    }
    if (diff === 'medium') {
      this.difficulty = 45;
    }
    if (diff === 'hard') {
      this.difficulty = 60;
    }
  }

  loadProgressBar(){
    this.progressPercent = 100*(this.currentQuestionNumber/this.totalQuestions);
    this.progress = this.sanitizer.bypassSecurityTrustStyle(`width: ${this.progressPercent}%`);
  }

  checkAnswer(playerAnswer: number){
    this.didAnswer = true;
    if (playerAnswer === this.correctIndex){
      this.points = this.calculatePoints();
      this.displayMsg = `Correct! +${this.points} pts.`;
    } else {
      this.displayMsg = `Wrong. The Correct answer is: ${this.answers[this.correctIndex]}`;
      this.points = 0;
    }
    this.sendAnswer();
  }

  calculatePoints(): number{
    const correctPoints = this.difficulty;
    const timeBonus = 1 + (this.currentTime/20);
    return Math.round(correctPoints*timeBonus);
  }







}


