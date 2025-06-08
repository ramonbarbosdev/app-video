import { Component, Input } from '@angular/core';
import {
        HlmCardContentDirective,
        HlmCardDescriptionDirective,
        HlmCardDirective,
        HlmCardFooterDirective,
        HlmCardHeaderDirective,
        HlmCardTitleDirective,
      } from '@spartan-ng/helm/card';


@Component({
  selector: 'app-cardroom',
    imports: [ HlmCardContentDirective,
              HlmCardDescriptionDirective,
              HlmCardDirective,
              HlmCardFooterDirective,
              HlmCardHeaderDirective,
              HlmCardTitleDirective,],
  templateUrl: './cardroom.html',
  styleUrl: './cardroom.scss'
})
export class Cardroom {

  @Input() nameRoom!: string;

}
