import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDialogComponent } from './dialog-dialog.component';

describe('DialogDialogComponent', () => {
  let component: DialogDialogComponent;
  let fixture: ComponentFixture<DialogDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
