export interface GameInterface {
    roll(numberOfPinsKnockedDown: number): void;
    score(): number;
}
