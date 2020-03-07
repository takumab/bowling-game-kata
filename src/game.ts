import { BowlingConsole } from './bowlingConsole';

export class Game {
    private bowlingConsole: BowlingConsole;

    constructor(bowlingConsole: BowlingConsole) {
        this.bowlingConsole = bowlingConsole;
    }

    roll = (numberOfPinsKnockedDown: number): void => {
        const message = `Pins knocked down: ${numberOfPinsKnockedDown}`;
        this.bowlingConsole.printLine(message);
    };
}
