import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule, MatSlideToggleModule, MatRadioModule, MatMenuModule, MatButtonModule, MatTableModule, MatDividerModule, MatSnackBarModule, MatPaginatorModule, MatDialogModule, MatSortModule } from '@angular/material';
@NgModule({
  exports: [
    MatCardModule,
    MatFormFieldModule, 
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule
  ]
})

export class SharedModule {

}