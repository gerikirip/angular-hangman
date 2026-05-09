import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Keyboard } from './game/keyboard/keyboard';
import { Game } from './shared/services/game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Keyboard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private gameService = inject(Game);

  guessedLetters = this.gameService.guessedLetters;

  onLetterGuessed(letter: string): void {
    this.gameService.guess(letter);
  }
}
