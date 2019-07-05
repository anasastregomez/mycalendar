import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  timer$: Subject<string> = new Subject();
  seconds: number = 0;
  interval;

  constructor() { 
    this.seconds = this.getSystemTime();
    this.secondsTimer();
  }

  getSystemTime() {
    const today = new Date();
    return today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
  }

  secondsTimer() {
    this.interval = setInterval(() => {
      this.seconds++;
      this.timer$.next(this.seconds.toString());
    }, environment.timerValue * 1000);
  }

  clearTimer() {
    clearInterval(this.interval);
  }
}
