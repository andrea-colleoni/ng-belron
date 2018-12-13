import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Hero } from '../model/hero';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private hs: HeroService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.subscribe(e => {
      // console.log(e);
      if (e instanceof NavigationEnd) {
        this.loadHero();
      }
    });
    this.loadHero();
  }


  loadHero() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.hs.getHero(id);
    console.log(id);
  }

  goBack() {
    this.location.back();
  }

  goToId(id: number) {
    this.router.navigate(['/detail/' + id]);
  }

}
