import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { NewWidgetData } from '../../../models/widget.models';

@Component({
  selector: 'add-widget-dialog',
  templateUrl: './add-widget-dialog.component.html',
  styleUrls: ['./add-widget-dialog.component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatRadioModule,
  ],
})
export class AddWidgetDialogComponent implements OnInit {
  dialogRef: MatDialogRef<AddWidgetDialogComponent> = inject(MatDialogRef);
  data: NewWidgetData = inject(MAT_DIALOG_DATA);

  ngOnInit() {
    this.data = {
      width: 'half',
      height: 1,
    };
  }

  onCancel() {
    this.dialogRef.close();
  }
}
