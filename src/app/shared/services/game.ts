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
    return [...this.guessedLetters().values()].filter(status => status === 'wrong').length >= 6; 
  }

  isWon(): boolean {
    const uniqueLetters = [...new Set(this.word.split(''))];
    return uniqueLetters.every(letter => this.guessedLetters().get(letter) === 'correct');
  }
}
