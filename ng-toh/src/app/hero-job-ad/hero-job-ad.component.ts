import { Component, OnInit } from '@angular/core';
import { AdComponent } from '../ad-component';

@Component({
  selector: 'app-hero-job-ad',
  templateUrl: './hero-job-ad.component.html',
  styleUrls: ['./hero-job-ad.component.css']
})
export class HeroJobAdComponent implements OnInit, AdComponent {
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
