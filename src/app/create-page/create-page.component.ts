import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  categories = ['Science', 'Art', 'History', 'Sports', 'Nature', 'Geography', 'Literature'];
  selectedCategory: string;
  seats: string;
  questions: string;
  private = false;
  name: string;

  selectCategory(category) {
    this.selectedCategory = category;
    console.log(this.selectedCategory);
  }

  selectedSeats(num: string) {
    this.seats = num;
    console.log(this.seats);
  }

  selectedQuestions(num: string) {
    this.questions = num;
    console.log(this.questions);
  }

  privateOrPublic() {
    this.private = !this.private;
    console.log(this.private);
  }

  lobbyName(value: string) {
    this.name = value;
    console.log(this.name);
  }

  create() {
    const x = this;
    if (x.selectedCategory && x.seats && x.questions && x.name) {
      $.ajax({
        url: 'connect-to-lobby',
        method: 'POST',
        data: {
          category: x.selectedCategory,
          seats: x.seats,
          questions: x.questions,
          private: x.private,
          name: x.name
        },
        success: function(res) {
          console.log('** GAME CREATED **');
        },
        error: function(res) {
          alert('There was a problem connecting to lobby...');
        }
      });
    } else {
      console.log('create game values missing');
      alert('Missing values for game creation');
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
