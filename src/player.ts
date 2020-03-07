import { Game } from './game';
import { GameInterface } from './gameInterface';

export class Player {
    private game: GameInterface;

    constructor(game: GameInterface) {
        this.game = game;
    }

    rollBall(numberOfPinsKnockedDown: number): void {
        this.game.roll(numberOfPinsKnockedDown);
    }

    getScore(): void {
        throw new Error('Not implemented yet');
    }
}
