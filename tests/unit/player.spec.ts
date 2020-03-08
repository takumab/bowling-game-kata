import { Player } from '../../src/player';
import { GameInterface } from '../../src/gameInterface';

describe('Player', () => {
    it('should be able to roll a ball', () => {
        const MockGame = jest.fn<GameInterface, []>(() => ({
            roll: jest.fn()
        }));
        const mockGame = new MockGame();
        const player = new Player(mockGame);

        const numberOfPinsKnockedDown = 10;
        player.rollBall(numberOfPinsKnockedDown);

        expect(mockGame.roll).toHaveBeenCalledWith(numberOfPinsKnockedDown);
    });
});
