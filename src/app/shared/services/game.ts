import { Injectable, signal } from '@angular/core';
import { LetterStatus } from '../models/key.model';

@Injectable({
  providedIn: 'root',
})
export class Game {
  word = '';
  guessedLetters = signal<Map<string, LetterStatus>>(new Map());

  guess(letter: string): void {
    const status: LetterStatus = this.word.toUpperCase().includes(letter) ? 'correct' : 'wrong';
    this.guessedLetters.update(current => {
      const next = new Map(current);
      next.set(letter, status);
      return next;
    });
  }

  isFailed(): boolean {
    const wrongCount = [...this.guessedLetters().values()].filter(status => status === 'wrong').length;
    return wrongCount >= 6; 
  }
}
