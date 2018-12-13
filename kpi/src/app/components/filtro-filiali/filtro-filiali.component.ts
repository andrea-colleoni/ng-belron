import { Component, OnInit } from '@angular/core';
import { FilialiService } from 'src/app/services/filiali.service';
import { Filiale } from 'src/app/models/filiale';
import { EventiService } from 'src/app/services/eventi.service';
import { Filtro } from 'src/app/models/filtro';

@Component({
  selector: 'kpi-filtro-filiali',
  templateUrl: './filtro-filiali.component.html',
  styleUrls: ['./filtro-filiali.component.css']
})
export class FiltroFilialiComponent implements OnInit {

  filiali: Filiale[];
  filialeSelezionata: Filiale;

  constructor(
    private fs: FilialiService,
    private es: EventiService,
  ) { }

  ngOnInit() {
    this.fs.getFiliali().subscribe((f) => this.filiali = f);
  }

  applica() {
    this.es.filtro.filiale = this.filialeSelezionata;
    this.es.applicaFiltro();
    console.log('filtro per filiale -> ' + (!!this.filialeSelezionata ? this.filialeSelezionata.nome : 'nessuna'));
  }

}
