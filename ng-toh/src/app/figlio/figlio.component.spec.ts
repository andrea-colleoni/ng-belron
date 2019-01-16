import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiglioComponent } from './figlio.component';

describe('FiglioComponent', () => {
  let component: FiglioComponent;
  let fixture: ComponentFixture<FiglioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiglioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
