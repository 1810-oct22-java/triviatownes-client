import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {
  categories = ['Science', 'Art', 'History', 'Sports', 'Nature', 'Geography', 'Literature'];
  selectedCategory: string;
  seats = '';
  questions = '';
  private = false;
  name = '';

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

  // $http.post('/', data, config).then(successCallback, errorCallback);

  create() {
  }

  constructor() { }

  ngOnInit() {
  }

}
