import { Component, Inject, Input } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PeriodicElement } from '../periodic-element';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {
  disable = true;
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  edit() {
    this.disable = !this.disable;
  }


}
