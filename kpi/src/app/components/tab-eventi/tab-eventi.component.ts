import { Component, OnInit } from '@angular/core';
import { EventoKPI } from 'src/app/models/evento-kpi';
import { EventiService } from 'src/app/services/eventi.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { FilialiService } from 'src/app/services/filiali.service';
import { ProcessiService } from 'src/app/services/processi.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'kpi-tab-eventi',
  templateUrl: './tab-eventi.component.html',
  styleUrls: ['./tab-eventi.component.css']
})
export class TabEventiComponent implements OnInit {

  eventi: any[];
  filiali: SelectItem[];
  processi: SelectItem[];
  esiti: SelectItem[];

  constructor(
    private es: EventiService,
    private fs: FilialiService,
    private ps: ProcessiService,
  ) { }

  ngOnInit() {
    this.fs.getFiliali().subscribe(f => {
      this.filiali = f.map<SelectItem>((fi) => ({ label: fi.nome, value: fi.id }));
    });
    this.filiali.unshift({ label: 'Tutte le filiali', value: null });
    this.ps.getProcessi().subscribe(f => {
      this.processi = f.map<SelectItem>((pr) => ({ label: pr.nome, value: pr.nome }));
    });
    this.processi.unshift({ label: 'Tutti i processi', value: null });
    this.esiti = [
      { label: 'Tutti', value: null },
      { label: 'OK', value: 'ok' },
      { label: 'KO', value: 'ko' },
    ];
    this.es.eventi.subscribe(
      (e) => this.eventi = e.map(ev => Object.assign(ev, { esitoStr: (ev.esito ? 'ok' : 'ko') })));
    this.es.loadEventi();
  }

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

}
