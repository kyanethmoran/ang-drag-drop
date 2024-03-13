import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainviewComponent } from '../mainview/mainview.component';

import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [MainviewComponent],
  imports: [CommonModule, MatToolbarModule],
})
export class MainviewModule {}
