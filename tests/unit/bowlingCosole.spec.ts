import { BowlingConsole } from '../../src/bowlingConsole';

xdescribe('Bowling Console', () => {
    it('should print pins knocked down for each roll', () => {
        const message = 'Pins knocked down: 10';
        const bowlingConsole = new BowlingConsole();
        expect(bowlingConsole.printLine(message)).toEqual(
            'Pins knocked down: 10'
        );
    });
});
