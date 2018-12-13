import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-heroes';
import { Observable, of, Subject } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Subject<Hero[]>;

  constructor(
    private ms: MessagesService
  ) {
    this.heroes = new Subject<Hero[]>();
  }

  subscribeHeroes(): Observable<Hero[]> {
    return this.heroes;
  }

  loadHeroes() {
    this.ms.add('lettura array degli eroi');
    this.heroes.next(HEROES);
  }

  filtra() {
    this.heroes.next(HEROES.filter((v) => true));
  }

  getHero(id: number): Hero {
    return HEROES.find(h => h.id === id);
  }
}
