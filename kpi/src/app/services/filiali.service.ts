import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Filiale } from '../models/filiale';
import { FILIALI } from '../models/filiali-mock';

@Injectable({
  providedIn: 'root'
})
export class FilialiService {

  constructor() { }

  getFiliali(): Observable<Filiale[]> {
    return of(FILIALI);
  }
}
