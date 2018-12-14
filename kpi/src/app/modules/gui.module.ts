import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
    BrowserAnimationsModule,
    TableModule,
    DropdownModule,
    FontAwesomeModule,
    SliderModule,
  ]
})
export class GuiModule {

}
