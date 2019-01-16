import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class FiglioComponent implements OnInit, OnChanges,
DoCheck, AfterContentInit, AfterContentChecked,
AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() prop: string;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on changes');
    console.log(changes);
  }

  ngOnInit() {
    console.log('on init');
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngAfterContentInit(): void {
    console.log('after content init');
  }

  ngAfterContentChecked() {
    console.log('after content checked');
  }

  ngAfterViewInit() {
    console.log('after view init');
  }

  ngAfterViewChecked() {
    console.log('after view checked');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

}
