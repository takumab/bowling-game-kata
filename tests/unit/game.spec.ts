import { BowlingConsole } from '../../src/bowlingConsole';
import { Game } from '../../src/game';

describe('Game', () => {
    it('should print number of pins knocked down', () => {
        const MockConsole = jest.fn<BowlingConsole, []>(() => ({
            printLine: jest.fn()
        }));
        const mockConsole = new MockConsole();
        const game = new Game(mockConsole);
        const numberOfPinsKnockedDown = 10;
        const message = `Pins knocked down: ${numberOfPinsKnockedDown}`;

        game.roll(numberOfPinsKnockedDown);

        expect(mockConsole.printLine).toHaveBeenCalledWith(message);
    });

    it('should get total score for perfect game', () => {
        const MockConsole = jest.fn<BowlingConsole, []>(() => ({
            printLine: jest.fn()
        }));
        const mockConsole = new MockConsole();
        const game = new Game(mockConsole);

        const actualScore = game.score();
        const expectedScore = 300;

        expect(actualScore).toEqual(expectedScore);
    });
});
