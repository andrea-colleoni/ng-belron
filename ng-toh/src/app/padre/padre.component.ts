import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  padreProp: string;
  altraProp: string;

  constructor() { }

  ngOnInit() {
    this.altraProp = environment.db;
  }

}
