import { Injectable } from '@angular/core';
import { EventoKPI } from '../models/evento-kpi';
import { Observable, of, Subject } from 'rxjs';
import { EVENTI } from '../models/eventi-mock';
import { Filtro } from '../models/filtro';

@Injectable({
  providedIn: 'root'
})
export class EventiService {

  filtro?: Filtro;
  eventi = new Subject<EventoKPI[]>();

  constructor(
  ) { }

  loadEventi() {
    this.filtro = new Filtro();
    this.eventi.next(EVENTI);
  }

  applicaFiltro() {
    console.log(this.filtro);
    if (this.filtro) {
      this.eventi.next(EVENTI.filter((e) =>
        !!this.filtro.filiale && e.filiale.id === this.filtro.filiale.id ||
        !!this.filtro.processo && e.processo.nome === this.filtro.processo.nome ||
        this.filtro.esito !== undefined && e.esito === this.filtro.esito));
    }
  }
}
