import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';
import { EventoKPI } from 'src/app/models/evento-kpi';
import { EventiService } from 'src/app/services/eventi.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { FilialiService } from 'src/app/services/filiali.service';
import { ProcessiService } from 'src/app/services/processi.service';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'kpi-tab-eventi',
  templateUrl: './tab-eventi.component.html',
  styleUrls: ['./tab-eventi.component.css']
})
export class TabEventiComponent implements OnInit, AfterContentInit {

  eventi: Observable<EventoKPI[]>;
  filiali: SelectItem[];
  processi: SelectItem[];
  esiti: SelectItem[];

  constructor(
    private es: EventiService,
    private fs: FilialiService,
    private ps: ProcessiService,
  ) { }

  ngOnInit() {
    this.fs.observableFiliali.subscribe(f => {
      this.filiali = f.map<SelectItem>((fi) => ({ label: fi.nome, value: fi.nome }));
      this.filiali.unshift({ label: 'Tutte le filiali', value: null });
    });

    this.ps.observableProcessi.subscribe(f => {
      this.processi = f.map<SelectItem>((pr) => ({ label: pr.nome, value: pr.nome }));
      this.processi.unshift({ label: 'Tutti i processi', value: null });
    });

    this.esiti = [
      { label: 'Tutti', value: null },
      { label: 'OK', value: 'ok' },
      { label: 'KO', value: 'ko' },
    ];

    this.eventi = this.es.observableEventi;
  }

  ngAfterContentInit() {
    this.fs.getFiliali();
    this.es.loadEventi();
    this.ps.getProcessi();
  }
  /*
  onDateChange(event, dt: Table) {
    const daysMin = this.eventi
      .map(e => e.data.getTime() / (1000 * 60 * 60 * 24))
      .reduce((min, act) => (act < min ? act : min));
    const daysMax = this.eventi
      .map(e => e.data.getTime() / (1000 * 60 * 60 * 24))
      .reduce((min, act) => (act > min ? act : min));
    console.log(dt.value);
    dt.value = dt.value.filter(e => e.data > new Date());
    console.log(event.values);
  }
  */
}
