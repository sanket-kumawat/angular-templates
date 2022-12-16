import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { CardModule } from '../../components/card/card.module';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatToolbarModule, CardModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
