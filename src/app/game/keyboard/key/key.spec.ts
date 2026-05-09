import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Key } from './key';

describe('Key', () => {
  let component: Key;
  let fixture: ComponentFixture<Key>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Key],
    }).compileComponents();

    fixture = TestBed.createComponent(Key);
    component = fixture.componentInstance;
  });

  it('should display the letter', () => {
    fixture.componentRef.setInput('letter', 'A');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent.trim()).toBe('A');
  });

  it('should emit pressed event on click when idle', () => {
    fixture.componentRef.setInput('letter', 'A');
    fixture.componentRef.setInput('status', 'idle');
    fixture.detectChanges();

    let emitted: string | undefined;
    component.pressed.subscribe((val: string) => emitted = val);

    const button = fixture.nativeElement.querySelector('button');
    button.click();

    expect(emitted).toBe('A');
  });

  it('should not emit when status is correct', () => {
    fixture.componentRef.setInput('letter', 'A');
    fixture.componentRef.setInput('status', 'correct');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });

  it('should not emit when status is wrong', () => {
    fixture.componentRef.setInput('letter', 'A');
    fixture.componentRef.setInput('status', 'wrong');
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });
});
