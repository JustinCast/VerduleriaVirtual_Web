import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDialogModule,
  MatSelectModule,
<<<<<<< HEAD
  MatProgressSpinnerModule,
  MatSlideToggleModule,
=======
  MatSlideToggleModule
>>>>>>> pablo_dev

} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
<<<<<<< HEAD
=======
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
>>>>>>> pablo_dev
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
<<<<<<< HEAD
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
=======
>>>>>>> pablo_dev
    MatSlideToggleModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
<<<<<<< HEAD
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HttpClientModule,
=======
>>>>>>> pablo_dev
    MatSlideToggleModule
  ]
})
export class SharedModule {}
