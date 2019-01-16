import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogDialogComponent } from '../dialog-dialog/dialog-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
