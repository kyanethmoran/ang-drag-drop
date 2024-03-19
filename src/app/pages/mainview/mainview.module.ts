import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainviewComponent } from '../mainview/mainview.component';

import { MatToolbarModule } from '@angular/material/toolbar';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [MainviewComponent],
  imports: [CommonModule, MatToolbarModule, DragDropModule],
})
export class MainviewModule {}
