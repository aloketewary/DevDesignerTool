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
  MatBottomSheetModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslationModule } from 'angular-l10n';

@NgModule({
  imports: [
    CommonModule,
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
    TranslationModule
  ],
  declarations: [
    LoaderComponent,
  ],
  exports: [
    LoaderComponent,
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
    TranslationModule
  ]
})
export class SharedModule { }
