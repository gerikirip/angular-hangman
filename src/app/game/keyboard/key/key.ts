import { Component, input, output } from '@angular/core';
import { LetterStatus } from '../../../shared/models/key.model';

@Component({
  selector: 'app-key',
  imports: [],
  templateUrl: './key.html',
  styleUrl: './key.scss',
})
export class Key {
  letter = input.required<string>();
  status = input<LetterStatus>('idle');
  pressed = output<string>();

  onClick(): void {
    if (this.status() !== 'idle') return;
    this.pressed.emit(this.letter());
  }
}
