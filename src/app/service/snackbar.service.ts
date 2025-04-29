import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SNACK_BAR_MESSAGE_TYPE } from '../models/snack-bar-model';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  public showSnackBar(context: string, message: string) {
    this.snackBar.open(message, '', {
      panelClass: [context || SNACK_BAR_MESSAGE_TYPE.default],
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 5000
    });
  }

  public showErrorMessage(message: string) {
    this.showSnackBar(SNACK_BAR_MESSAGE_TYPE.error, message);
  }

  public showSuccessMessage(message: string) {
    this.showSnackBar(SNACK_BAR_MESSAGE_TYPE.success, message);
  }
}
