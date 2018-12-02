import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit, OnChanges {
  categories = ['Science', 'Art', 'History', 'Sports', 'Nature', 'Geography', 'Literature'];
  selectedCategory: string;
  seats = '';
  questions = '';
  private = false;

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

  publicOrPrivate () {
    this.private = !this.private;
    console.log(this.private);
  }

  create() {
    // take all inputs and send somewhere
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }





}
