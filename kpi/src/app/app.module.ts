import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FiltriComponent } from './components/filtri/filtri.component';
import { TabEventiComponent } from './components/tab-eventi/tab-eventi.component';
import { FiltroFilialiComponent } from './components/filtro-filiali/filtro-filiali.component';
import { FiltroProcessiComponent } from './components/filtro-processi/filtro-processi.component';
import { FiltroEsitiComponent } from './components/filtro-esiti/filtro-esiti.component';
import { GuiModule } from './modules/gui.module';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    FiltriComponent,
    TabEventiComponent,
    FiltroFilialiComponent,
    FiltroProcessiComponent,
    FiltroEsitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GuiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faThumbsUp);
    library.add(faThumbsDown);
  }
 }
