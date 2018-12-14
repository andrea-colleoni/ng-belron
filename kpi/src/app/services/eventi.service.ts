import { Injectable } from '@angular/core';
import { EventoKPI } from '../models/evento-kpi';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const urlLog = '/Log';
@Injectable({
  providedIn: 'root'
})
export class EventiService {

  private eventi = new Subject<EventoKPI[]>();

  constructor(
    private http: HttpClient
  ) { }

  loadEventi() {
    this.loadAllEventi()
      .subscribe(
        arLog => this.eventi.next(arLog)
    );
  }

  get observableEventi(): Observable<EventoKPI[]> {
    return this.eventi;
  }

  private loadAllEventi(): Observable<EventoKPI[]> {
    return this.http.get<EventoKPI[]>(environment.apiUrl + urlLog)
      .pipe(
        map(arLog => arLog.map(log => Object.assign(new EventoKPI(), log, { esitoStr: (log.esito ? 'ok' : 'ko') })))
        // TODO: gestione errore
      );
  }

}
