import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../model/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes = HEROES;

  constructor(
    private ms: MessagesService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.ms.add('lettura array degli eroi');
    return of(this.heroes);
  }
}
