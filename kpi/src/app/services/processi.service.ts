import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Processo } from '../models/processo';
import { PROCESSI } from '../models/processi-mock';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const urlProc = '/Processi';

@Injectable({
  providedIn: 'root'
})
export class ProcessiService {

  private processi: Subject<Processo[]>;

  constructor(
    private http: HttpClient
  ) {
    this.processi = new Subject<Processo[]>();
  }

  get observableProcessi(): Observable<Processo[]> {
    return this.processi;
  }

  getProcessi() {
    this.loadAllProcessi()
      .subscribe(
        arFil => this.processi.next(arFil)
    );
  }

  private loadAllProcessi(): Observable<Processo[]> {
    return this.http.get<Processo[]>(environment.apiUrl + urlProc)
      .pipe(
        map(arFil => arFil.map(fil => Object.assign(new Processo(), fil)))
        // TODO: gestione errore
      );
  }
}
