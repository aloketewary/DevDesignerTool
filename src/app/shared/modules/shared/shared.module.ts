import { TranslationModule } from 'angular-l10n';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import {
    MatBottomSheetModule, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule,
    MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressBarModule,
    MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule
} from '@angular/material';

import { SearchPipe } from '../../pipe/search.pipe';
import { SharedRoutingModule } from './shared-routing.module';

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
    TranslationModule,
    MatDialogModule,
    DragDropModule
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
    TranslationModule,
    MatDialogModule,
    DragDropModule
  ]
})
export class SharedModule { }
