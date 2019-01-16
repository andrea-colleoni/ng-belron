import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { PostsComponent } from '../posts/posts.component';
import { PostDetailComponent } from '../post-detail/post-detail.component';
import { VoterComponent } from '../voter/voter.component';
import { VoteTakerComponent } from '../vote-taker/vote-taker.component';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { CountdownLocalVarParentComponent } from '../countdown-local-var-parent/countdown-local-var-parent.component';
import { AdBannerComponent } from '../ad-banner/ad-banner.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'post/:id', component: PostDetailComponent },
  { path: 'vote', component: VoteTakerComponent },
  { path: 'timer', component: CountdownLocalVarParentComponent },
  { path: 'banner', component: AdBannerComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
