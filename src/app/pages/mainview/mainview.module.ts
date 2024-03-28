import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainviewComponent } from '../mainview/mainview.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [MainviewComponent],
  imports: [CommonModule, DragDropModule],
})
export class MainviewModule {}
