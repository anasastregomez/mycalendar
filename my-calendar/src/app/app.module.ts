import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { TimerService } from './timer.service';
import { TimerPipe } from './timer/timer.pipe';
import { CalendarComponent } from './calendar/calendar.component';
import { TodayDateComponent } from './today-date/today-date.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerComponent,
    TimerPipe,
    CalendarComponent,
    TodayDateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TimerService],
  entryComponents: [
    TimerComponent
  ],
  exports: [
    TimerPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
