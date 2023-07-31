// Input: String
// Output: Integer (Score)

// calculateFrame :: String --> Int
const calculateFrame = (twoRolls: string) => {
    const toNumber = (roll: string): number => Number(roll);
    const sumUp = (total: number, roll: number): number => roll + total;
    const isANumber = (str: string) => parseInt(str);
    const firstRoll = Number(twoRolls[0]);
    const spare = 10 - firstRoll;
    const rollReducer = (rolls: string, initialValue: number) =>
        rolls
            .split('')
            .filter(isANumber)
            .map(toNumber)
            .reduce(sumUp, initialValue);

    const SYMBOLS = {
        spare: '/',
        strike: 'X',
        miss: '-',
        frameBoundary: '|',
        bonusBalls: '||'
    } as const;

    if (twoRolls.includes(SYMBOLS.frameBoundary)) return 12;

    if (twoRolls.includes(SYMBOLS.spare)) {
        return rollReducer(twoRolls, spare);
    }

    return rollReducer(twoRolls, 0);
};

// calculateScoreFor :: String --> Int
const calculateScoreFor = (allRolls: string) => {
    return calculateFrame(allRolls);
};

describe('Bowling Game', () => {
    describe('Acceptance Test', () => {
        test('should calculate a score for a game', () => {
            const result = calculateScoreFor('X|7/|9-|X|-8|8/|-6|X|X|X||81');
            expect(result).toEqual(167);
        });
    });

    test.each`
        pins    | expectedScore
        ${'1'}  | ${1}
        ${'2'}  | ${2}
        ${'3'}  | ${3}
        ${'4'}  | ${4}
        ${'23'} | ${5}
    `(
        'should calculate score for $pins knocked down',
        ({ pins, expectedScore }) => {
            const result = calculateScoreFor(pins);
            expect(result).toBe(expectedScore);
        }
    );

    test.each`
        pins    | expectedScore
        ${'1-'} | ${1}
        ${'-2'} | ${2}
        ${'--'} | ${0}
    `('should account for pins missed', ({ pins, expectedScore }) => {
        const result = calculateFrame(pins);
        expect(result).toBe(expectedScore);
    });

    test.each`
        pins    | expectedScore
        ${'5/'} | ${10}
        ${'7/'} | ${10}
        ${'3/'} | ${10}
        ${'9/'} | ${10}
    `('should calculate the score for a spare', ({ pins, expectedScore }) => {
        const result = calculateFrame(pins);
        expect(result).toBe(expectedScore);
    });

    test('should calculate the score for a spare with bonus ball included', () => {
        const result = calculateFrame('5/|23');
        expect(result).toBe(12);
    });
});
