import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
  currentTime: number = 25;

  currentQuestionNumber: number = 2;
  totalQuestions: number = 15;
  progressPercent: number;
  progress;

  // Player properties
  didAnswer: boolean = false;
  displayMsg: string;
  points: number;


  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.loadQuestion();
    this.loadProgressBar();
  }

  
  loadQuestion(){
//    this.questionObj = this.payload['QuestionBean'];
    this.questionObj = JSON.parse(this.jsonString);
    console.log(this.questionObj);
    this.isMultipleChoice = this.questionObj['isMultipleChoice'];
    this.category = this.questionObj['category'];
    this.setDifficulty();
    this.question = this.questionObj['question'];
    this.correctIndex = this.questionObj['correctIndex'];
    this.answers = this.questionObj['answers'];
  }

  // Set difficulty multiplier
  setDifficulty(){
    if (this.questionObj['difficulty'] == 'easy'){
      this.difficulty = 30;
    }
    else if (this.questionObj['difficulty'] == 'medium'){
      this.difficulty = 45;
    }
    else if (this.questionObj['difficulty'] == 'hard'){
      this.difficulty = 60;
    }
  }

  loadProgressBar(){
    this.progressPercent = 100*(this.currentQuestionNumber/this.totalQuestions);
    this.progress = this.sanitizer.bypassSecurityTrustStyle(`width: ${this.progressPercent}%`);
  }

  checkAnswer(playerAnswer: number){
      this.didAnswer = true;
      if (playerAnswer == this.correctIndex){
        this.points = this.calculatePoints();
        this.displayMsg = `Correct! +${this.points} pts.`;
      }
      else{
        this.displayMsg = `Wrong. The Correct answer is: ${this.answers[this.correctIndex]}`;
        this.points = 0;
      }
  }

  calculatePoints(): number{
    let correctPoints = this.difficulty;
    let timeBonus = 1 + (this.currentTime/30);
    return Math.round(correctPoints*timeBonus);
  }







}


