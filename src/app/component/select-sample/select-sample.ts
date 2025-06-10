import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
  selector: 'app-select-sample',
  imports: [FormsModule, CommonModule, HlmSelectImports, BrnSelectImports],
  templateUrl: './select-sample.html',
  styleUrl: './select-sample.scss',
})
export class SelectSample {
  @Input() label!: string;
  @Input() inputId!: string;
  @Input() required: boolean = false;

  @Input() options: any[] = [];
  @Input() valueField: string = 'id';
  @Input() labelField: string = 'label';

  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.modelChange.emit(value);
  }
}
