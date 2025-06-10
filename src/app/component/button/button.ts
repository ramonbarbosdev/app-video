import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HlmButtonDirective } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-button',
  imports: [CommonModule, FormsModule,   HlmButtonDirective,],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() text: string = 'Clique aqui';
  @Input() type: string = '';
  @Input() icon: string = '';
  @Input() color: string = '#4da6ff';
  @Input() backgroundColor: string = '#ffffff';
  @Input() disabled: boolean = false;
  @Output() clickEvent = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.clickEvent.emit();
    }
  }
}
