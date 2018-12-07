import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { GlobalsService } from '../globals.service';


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

  constructor(public globals: GlobalsService) { }

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
        success: function (res) {
          console.log('** GAME CREATED **');
        },
        error: function (res) {
          alert('There was a problem connecting to lobby...');
        }
      });
    } else {
      console.log('create game values missing');
      alert('Missing values for game creation');
    }
  }

  testing() {
    $.ajax({
      url: this.globals.getApiUrl() + 'new-user',
      method: 'GET',
      crossDomain: true,
      xhrFields: { withCredentials: true },
      success: function (result) {
        console.log('Created Session');
      },
      error: function (result) {
        console.log('Something went wrong');
        console.log(result);
      }
    });
  }


  ngOnInit() {
    const penner = anime.timeline();
    penner
      .add({
        targets: '#penner .linear', translateY: 250, offset: 0,
        easing: 'linear'
      })
      .add({
        targets: '#penner .InQuad', translateY: 250, offset: 0,
        easing: 'easeInQuad'
      })
      .add({
        targets: '#penner .InCubic', translateY: 250, offset: 0,
        easing: 'easeInCubic'
      })
      .add({
        targets: '#penner .InQuart', translateY: 250, offset: 0,
        easing: 'easeInQuart'
      })
      .add({
        targets: '#penner .InQuint', translateY: 250, offset: 0,
        easing: 'easeInQuint'
      })
      .add({
        targets: '#penner .InSine', translateY: 250, offset: 0,
        easing: 'easeInSine'
      })
      .add({
        targets: '#penner .InExpo', translateY: 250, offset: 0,
        easing: 'easeInExpo'
      })
      .add({
        targets: '#penner .InCirc', translateY: 250, offset: 0,
        easing: 'easeInCirc'
      })
      .add({
        targets: '#penner .InBack', translateY: 250, offset: 0,
        easing: 'easeInBack'
      })
      .add({
        targets: '#penner .OutQuad', translateY: 250, offset: 0,
        easing: 'easeOutQuad'
      })
      .add({
        targets: '#penner .OutCubic', translateY: 250, offset: 0,
        easing: 'easeOutCubic'
      })
      .add({
        targets: '#penner .OutQuart', translateY: 250, offset: 0,
        easing: 'easeOutQuart'
      })
      .add({
        targets: '#penner .OutQuint', translateY: 250, offset: 0,
        easing: 'easeOutQuint'
      })
      .add({
        targets: '#penner .OutSine', translateY: 250, offset: 0,
        easing: 'easeOutSine'
      })
      .add({
        targets: '#penner .OutExpo', translateY: 250, offset: 0,
        easing: 'easeOutExpo'
      })
      .add({
        targets: '#penner .OutCirc', translateY: 250, offset: 0,
        easing: 'easeOutCirc'
      })
      .add({
        targets: '#penner .OutBack', translateY: 250, offset: 0,
        easing: 'easeOutBack'
      })
      .add({
        targets: '#penner .InOutQuad', translateY: 250, offset: 0,
        easing: 'easeInOutQuad'
      })
      .add({
        targets: '#penner .InOutCubic', translateY: 250, offset: 0,
        easing: 'easeInOutCubic'
      })
      .add({
        targets: '#penner .InOutQuart', translateY: 250, offset: 0,
        easing: 'easeInOutQuart'
      })
      .add({
        targets: '#penner .InOutQuint', translateY: 250, offset: 0,
        easing: 'easeInOutQuint'
      })
      .add({
        targets: '#penner .InOutSine', translateY: 250, offset: 0,
        easing: 'easeInOutSine'
      })
      .add({
        targets: '#penner .InOutExpo', translateY: 250, offset: 0,
        easing: 'easeInOutExpo'
      })
      .add({
        targets: '#penner .InOutCirc', translateY: 250, offset: 0,
        easing: 'easeInOutCirc'
      })
      .add({
        targets: '#penner .InOutBack', translateY: 250, offset: 0,
        easing: 'easeInOutBack'
      });
  }

}
