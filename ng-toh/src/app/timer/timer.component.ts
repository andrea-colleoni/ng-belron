import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  timer = timer(1000, 1000);
  secondi: number;

  constructor() { }

  ngOnInit() {
    this.timer.subscribe((n) => this.secondi = n);
  }

}
