import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
  AfterViewChecked, AfterViewInit, OnDestroy, Input, SimpleChanges } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewChecked, AfterViewInit, OnDestroy {

  @Input() testLifeCycle: string;
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private hs: HeroService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('on changes');
    console.log(changes);
  }

  ngOnInit() {
    console.log('on init');
    this.hs.subscribeHeroes().subscribe((heroes) => this.heroes = heroes);
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

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  reload() {
    this.hs.loadHeroes();
  }

}
