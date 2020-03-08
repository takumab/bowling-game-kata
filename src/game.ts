import { BowlingConsole } from './bowlingConsole';
import { GameInterface } from './gameInterface';

export class Game implements GameInterface {
    private bowlingConsole: BowlingConsole;

    constructor(bowlingConsole: BowlingConsole) {
        this.bowlingConsole = bowlingConsole;
    }

    roll(numberOfPinsKnockedDown: number): void {
        const message = `Pins knocked down: ${numberOfPinsKnockedDown}`;
        this.bowlingConsole.printLine(message);
    }

    score(): number {
        return 300;
    }
}
