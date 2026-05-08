import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Keyboard } from './game/keyboard/keyboard';
import { LetterStatus } from './shared/models/key.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Keyboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  word = 'ASD';

  guessedLetters = signal<Map<string, LetterStatus>>(new Map([]));

  onLetterGuessed(letter: string): void {
    if (this.word.toUpperCase().includes(letter)) {
      this.guessedLetters.update(current => {
        const next = new Map(current);
        next.set(letter, 'correct');
        return next;
      });
    }
  }
}
