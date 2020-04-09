import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './aside-component/aside.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatIconModule,
  MatCardModule,
  MatRadioModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule,
  MatMenuModule,
  MatPaginatorModule,
  MatInputModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatDividerModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatStepperModule,
  MatDialogModule,
  MatGridListModule,
  MatListModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [AsideComponent],
  imports: [
    FlexLayoutModule,
    CommonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatStepperModule,
    MatDialogModule,
    MatGridListModule,
    MatListModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AsideComponent]
})
export class AsideModule { }
