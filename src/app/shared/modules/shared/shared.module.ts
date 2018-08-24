import { SearchPipe } from './../../pipe/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import {
  MatSnackBarModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatCardModule,
  MatDividerModule,
  MatTooltipModule,
  MatListModule,
  MatBottomSheetModule,
  MatProgressBarModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslationModule } from 'angular-l10n';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatInputModule,
    MatMenuModule,
    TranslationModule
  ],
  declarations: [
    LoaderComponent,
    SearchPipe
  ],
  exports: [
    LoaderComponent,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatDividerModule,
    MatTooltipModule,
    MatBottomSheetModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatInputModule,
    SearchPipe,
    MatMenuModule,
    TranslationModule
  ]
})
export class SharedModule { }
