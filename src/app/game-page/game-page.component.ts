import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  answers: string[] = ['This is an answer', 'This is an answer with a lot of words hopefully everything fits', 'Another answer', 'Woohoo'];
  a1: string = 'A. ';
  a2: string = 'B. ';
  a3: string = 'C. ';
  a4: string = 'D. ';
  Question: string = 'This is a hardcoded question';

  currentQuestionNumber: number = 1;
  totalQuestions: number = 15;

  constructor() { }

  ngOnInit() {
    this.loadAnswers(this.answers);
    Swal(
      'Good job!',
      'You clicked the button!',
      'success'
    ).then(() => {
      window.location.href = '/';
    });
  }

  loadAnswers(answers: string[]) {
    this.a1 += answers[0];
    this.a2 += answers[1];
    this.a3 += answers[2];
    this.a4 += answers[3];

  }

}


