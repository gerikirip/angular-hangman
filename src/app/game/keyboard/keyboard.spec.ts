import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Keyboard } from './keyboard';

describe('Keyboard', () => {
  let component: Keyboard;
  let fixture: ComponentFixture<Keyboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Keyboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Keyboard);
    component = fixture.componentInstance;
  });

  it('should render all 26 letters', () => {
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons.length).toBe(26);
  });

  it('should pass correct status to key', () => {
    fixture.componentRef.setInput('guessedLetters', new Map([['A', 'correct']]));
    fixture.detectChanges();

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const aButton = Array.from(buttons).find(btn => btn.textContent?.trim() === 'A');

    expect(aButton?.disabled).toBe(true);
  });

  it('should emit letterGuessed when a key is pressed', () => {
    fixture.componentRef.setInput('guessedLetters', new Map([]));
    fixture.detectChanges();
    
    let emitted: string | undefined;
    component.letterGuessed.subscribe((val: string) => emitted = val);

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    const aButton = Array.from(buttons).find(btn => btn.textContent?.trim() === 'A');
    
    aButton?.click();
    expect(emitted).toBe('A');
  });
});
