import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroProcessiComponent } from './filtro-processi.component';

describe('FiltroProcessiComponent', () => {
  let component: FiltroProcessiComponent;
  let fixture: ComponentFixture<FiltroProcessiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroProcessiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroProcessiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
