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
  standalone: true, 
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

  @Input() id_room!: number;
  @Input() nm_room!: string;
  @Input() ds_room!: string;
  @Input() imageUrl!: string;

}
