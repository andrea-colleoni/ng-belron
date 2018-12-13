import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroFilialiComponent } from './filtro-filiali.component';

describe('FiltroFilialiComponent', () => {
  let component: FiltroFilialiComponent;
  let fixture: ComponentFixture<FiltroFilialiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroFilialiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroFilialiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
