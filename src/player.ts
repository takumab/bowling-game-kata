import { GameInterface } from './gameInterface';

export class Player {
    private game: GameInterface;

    constructor(game: GameInterface) {
        this.game = game;
    }

    rollBall(numberOfPinsKnockedDown: number): void {
        this.game.roll(numberOfPinsKnockedDown);
    }

    getTotalScore(): number {
        return this.game.score();
    }
}
