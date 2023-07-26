import { Player } from '../../src/player';
import { GameInterface } from '../../src/gameInterface';

xdescribe('Player', () => {
    it('should be able to roll a ball', () => {
        const MockGame = jest.fn<GameInterface, []>(() => ({
            roll: jest.fn(),
            score: jest.fn()
        }));
        const mockGame = new MockGame();
        const player = new Player(mockGame);

        const numberOfPinsKnockedDown = 10;
        player.rollBall(numberOfPinsKnockedDown);

        expect(mockGame.roll).toHaveBeenCalledWith(numberOfPinsKnockedDown);
    });

    it('should return the total score of the player for the game', () => {
        const MockGame = jest.fn<GameInterface, []>(() => ({
            roll: jest.fn(),
            score: jest.fn()
        }));
        const mockGame = new MockGame();
        const player = new Player(mockGame);

        player.getTotalScore();

        expect(mockGame.score).toHaveBeenCalled();
    });
});
