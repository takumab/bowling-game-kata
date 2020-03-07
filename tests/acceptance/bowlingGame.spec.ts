import { Game } from '../../src/game';
import { Player } from '../../src/player';
import { BowlingConsole } from '../../src/bowlingConsole';

describe('Bowling Game', () => {
    it('should print pins knocked down after every roll', () => {
        const MockBowlingConsole = jest.fn<BowlingConsole, []>(() => ({
            printLine: jest.fn()
        }));
        const mockBowlingConsole = new MockBowlingConsole(); // should be mocking this
        const game = new Game(mockBowlingConsole);
        const player1 = new Player(game);
        const message = 'Pins knocked down: 10';

        player1.rollBall(10);

        expect(mockBowlingConsole.printLine).toHaveBeenCalledWith(message);
    });

    xit('should return total score for perfect game', () => {
        const bowlingConsole = new BowlingConsole();
        const game = new Game(bowlingConsole);
        const player1 = new Player(game);
        const player2 = new Player(game);

        player1.rollBall(10);
        player2.rollBall(10);

        player1.rollBall(10);
        player2.rollBall(10);

        player1.rollBall(10);
        player2.rollBall(10);

        player1.rollBall(10);
        player2.rollBall(10);

        player1.rollBall(10);
        player2.rollBall(10);

        player1.rollBall(10);
        player2.rollBall(10);

        player1.rollBall(10);
        player2.rollBall(10);

        player1.rollBall(10);
        player2.rollBall(10);

        player1.rollBall(10);
        player2.rollBall(10);

        player1.rollBall(10);
        player2.rollBall(10);

        expect(player1.getScore()).toEqual(300);
        expect(player2.getScore()).toEqual(300);
    });
});
