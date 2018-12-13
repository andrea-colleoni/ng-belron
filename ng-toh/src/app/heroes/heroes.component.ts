import { Component, OnInit } from '@angular/core';
import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private hs: HeroService,
  ) {
  }

  ngOnInit() {
    this.hs.getHeroes().subscribe((heroes) => this.heroes = heroes);
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

}