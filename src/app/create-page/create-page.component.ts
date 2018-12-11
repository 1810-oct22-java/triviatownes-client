import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { GlobalsService } from '../globals.service';


@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  selectedCategory: string;
  seats: string;
  questions: string;
  difficulty: string;
  // private = false;
  username: string;
  name: string;
  key: string;

  constructor(public globals: GlobalsService) { }

  ngOnInit () {
  }

  selectCategory(category) {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
  }

  selectedSeats(num: number) {
    this.seats = num + '';
    console.log(this.seats);
  }

  selectedQuestions(num: number) {
    this.questions = num + '';
    console.log(this.questions);
  }

  selectedDifficulty(str: string) {
    this.difficulty = str + '';
    console.log(this.difficulty);
  }

  // privateOrPublic() {
  //   this.private = !this.private;
  //   console.log(this.private);
  // }

  lobbyName(str: string) {
    this.name = str;
    console.log(this.name);
  }

  setUsername (str: string) {
    this.username = str;
    console.log(this.username);
  }

  create() {
    const x = this;
    if (x.selectedCategory && x.seats && x.questions && x.difficulty && x.name && x.username) {
      $.ajax({
        url: 'connect-to-lobby',
        method: 'POST',
        data: {
          category: x.selectedCategory,
          seats: x.seats,
          questions: x.questions,
          difficulty: x.difficulty,
          username: x.username,
          name: x.name,
        },
        success: function (res) {
          console.log('** GAME CREATED **');
        },
        error: function (res) {
          console.log(this.data);
          alert('There was a problem connecting to lobby...');
        }
      });
    } else {
      console.log('create game values missing');
      alert('Missing values for game creation');
    }
  }

}
