import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(_seconds: string): string {
    var hours = Math.floor(+  _seconds / 3600),
      minutes = Math.floor((+ _seconds % 3600) / 60),
      seconds = Math.floor(+ _seconds % 60);

    return this.padTime(hours) + ":" + this.padTime(minutes) + ":" + this.padTime(seconds);
  }

  padTime(t: number) {
    return t < 10 ? "0" + t : t;
  }

}
