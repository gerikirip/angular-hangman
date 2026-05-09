import { Component, computed, input, output } from '@angular/core';
import { Key } from './key/key';
import { LetterStatus } from '../../shared/models/key.model';

@Component({
  selector: 'app-keyboard',
  imports: [Key],
  templateUrl: './keyboard.html',
  styleUrl: './keyboard.scss',
})
export class Keyboard {
  guessedLetters = input<Map<string, LetterStatus>>(new Map());
  letterGuessed = output<string>();

  private readonly QWERTY = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['Z','X','C','V','B','N','M']
  ];

  get rows() {
    return this.QWERTY.map(row =>
      row.map(letter => ({
        letter,
        status: this.guessedLetters().get(letter) ?? 'idle'
      }))
    );
  }

  onLetterPressed(letter: string): void {
    this.letterGuessed.emit(letter);
  }
}
