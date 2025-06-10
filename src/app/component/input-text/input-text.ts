import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HlmInputDirective } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-input-text',
  imports: [HlmInputDirective],
  templateUrl: './input-text.html',
  styleUrl: './input-text.scss',
})
export class InputText {
  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  @Input() label!: string;
  @Input() inputId!: string;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.modelChange.emit(value);
  }
}
