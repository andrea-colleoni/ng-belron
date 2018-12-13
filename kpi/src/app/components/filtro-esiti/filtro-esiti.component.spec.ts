import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEsitiComponent } from './filtro-esiti.component';

describe('FiltroEsitiComponent', () => {
  let component: FiltroEsitiComponent;
  let fixture: ComponentFixture<FiltroEsitiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroEsitiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroEsitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
