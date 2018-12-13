import { Component, OnInit } from '@angular/core';
import { ProcessiService } from 'src/app/services/processi.service';
import { Processo } from 'src/app/models/processo';

@Component({
  selector: 'kpi-filtro-processi',
  templateUrl: './filtro-processi.component.html',
  styleUrls: ['./filtro-processi.component.css']
})
export class FiltroProcessiComponent implements OnInit {

  processi: Processo[];

  constructor(
    private ps: ProcessiService,
  ) { }

  ngOnInit() {
    this.ps.getProcessi().subscribe((p) => this.processi = p);
  }

  applica() {
    console.log('filtro per processo');
  }

}
