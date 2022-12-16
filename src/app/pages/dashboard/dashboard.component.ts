import { Component, OnInit } from '@angular/core';
import { CardConfig } from 'src/app/models/card.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cardData: CardConfig[] = [
    {
      header: {
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
      },
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      actions: [
        {
          buttonText: 'Like',
        },
        {
          buttonText: 'Share',
        },
      ],
      footer:
        '<div style="color: red; text-align: center">This is footer</div>',
    },
    {
      header: {
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
      },
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      actions: [
        {
          buttonText: 'Like',
        },
        {
          buttonText: 'Share',
        },
      ],
    },
    {
      header: {
        title: 'Shiba Inu',
        subtitle: 'Dog Breed',
      },
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      actions: [
        {
          buttonText: 'Like',
        },
        {
          buttonText: 'Share',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
