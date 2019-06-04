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
  MatSlideToggleModule

} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { environment } from 'src/environments/environment';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
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
    HttpClientModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule,
    MatSlideToggleModule
  ]
})
export class SharedModule {}
