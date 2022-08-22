import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  days: number = 8;
  hours: number = 23;
  minutes: number = 55;
  seconds: number = 41;

  constructor() {
    this.iniTCounter();
  }

  iniTCounter() {
    setInterval(() => {
      this.seconds = this.seconds > 0 ? this.seconds - 1 : 59;

      if (this.seconds === 0) {
        if (this.minutes > 0) {
          this.minutes -= 1;
        } else if (this.minutes === 0) {
          this.minutes = 59;

          if (this.hours > 0) {
            this.hours -= 1;
          } else if (this.hours === 0) {
            this.hours = 24;

            if (this.days > 0) {
              this.days -= 1;
            } else if (this.days === 0) {
              this.days = 8;
              alert('The time is now');
            }
          }
        }
      }
    }, 1000);
  }
}
