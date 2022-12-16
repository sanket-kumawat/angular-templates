import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { CardComponent } from './card.component';
import { PipeModule } from '../../pipes/pipe.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, PipeModule],
  exports: [CardComponent],
})
export class CardModule {}
