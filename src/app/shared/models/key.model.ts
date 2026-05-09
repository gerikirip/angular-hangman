export type LetterStatus = 'idle' | 'correct' | 'wrong';

export interface Key {
    letter: string;
    status: LetterStatus;
}