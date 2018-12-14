import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Filiale } from '../models/filiale';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const urlFiliali = '/Filiali';

@Injectable({
  providedIn: 'root'
})
export class FilialiService {

  private filiali: Subject<Filiale[]>;

  constructor(
    private http: HttpClient
  ) {
    this.filiali = new Subject<Filiale[]>();
  }

  get observableFiliali(): Observable<Filiale[]> {
    return this.filiali;
  }

  getFiliali() {
    // chiamo il ws
    this.loadAllFiliali()
      // quando ho finito di caricare le filiali...
      .subscribe(
        // next triggera il subject
        arFil => this.filiali.next(arFil)
    );
  }

  private loadAllFiliali(): Observable<Filiale[]> {
    return this.http.get<Filiale[]>(environment.apiUrl + urlFiliali)
      // prima di restiutuire l'observable rimappo le filiali
      .pipe(
        // trasformo le filiali dal JSON in vere filiali
        map(arFil => arFil.map(fil => Object.assign(new Filiale(), fil)))
        // TODO: gestione errore
      );
  }
}
