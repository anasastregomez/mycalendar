import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnDestroy {

  retrievedEventsSubscription: Subscription;
  secondsValue: string;

  constructor(private timerService: TimerService) { 
    this.secondsValue = this.timerService.getSystemTime().toString();
    this.suscribeTimerService();
  }

  ngOnInit() {
  }

  suscribeTimerService() {
    this.retrievedEventsSubscription = this.timerService.timer$.subscribe(
      event => {
        this.secondsValue = event;
      }
    );
  }

  ngOnDestroy() {
    this.timerService.clearTimer();
    this.retrievedEventsSubscription.unsubscribe();
  }

}
