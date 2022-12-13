import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
