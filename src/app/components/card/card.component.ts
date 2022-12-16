import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { ActionConfig, CardConfig } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardConfig: CardConfig;

  constructor() {}

  ngOnInit(): void {}

  performAction(action: ActionConfig): void {
    console.log(action);
  }
}
