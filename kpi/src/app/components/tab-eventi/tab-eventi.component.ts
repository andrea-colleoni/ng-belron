import { Component, OnInit } from '@angular/core';
import { EventoKPI } from 'src/app/models/evento-kpi';
import { EventiService } from 'src/app/services/eventi.service';

@Component({
  selector: 'kpi-tab-eventi',
  templateUrl: './tab-eventi.component.html',
  styleUrls: ['./tab-eventi.component.css']
})
export class TabEventiComponent implements OnInit {

  eventi: EventoKPI[];

  constructor(
    private es: EventiService,
  ) { }

  ngOnInit() {
    this.es.eventi.subscribe((e) => this.eventi = e);
    this.es.loadEventi();
  }

}
