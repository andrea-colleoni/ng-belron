import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Processo } from '../models/processo';
import { PROCESSI } from '../models/processi-mock';
import { Filtro } from '../models/filtro';

@Injectable({
  providedIn: 'root'
})
export class ProcessiService {

  constructor() { }

  getProcessi(): Observable<Processo[]> {
    return of(PROCESSI);
  }
}
