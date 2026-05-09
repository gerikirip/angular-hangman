import { TestBed } from '@angular/core/testing';

import { Game } from './game';

describe('Game', () => {
  let service: Game;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Game);
  });

  it('should mark letter as correct when it is in the word', () => {
    service.word='HANGMAN';
    service.guess('A');
    expect(service.guessedLetters().get('A')).toBe('correct');
  });

  it('should mark letter as wrong when it is not in the word', () => {
    service.word='HANGMAN';
    service.guess('B');
    expect(service.guessedLetters().get('B')).toBe('wrong');
  });
});
