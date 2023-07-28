// Input: String
// Output: Integer (Score)
// calculateFrame :: String --> Int
const calculateFrame = (twoRolls: string) => {
    const toNumber = (roll: string): number => Number(roll);
    const sumUp = (total: number, roll: number): number => roll + total;

    if (twoRolls.includes('/')) {
        const spare = 10 - Number(twoRolls[0]);
        return twoRolls
            .split('')
            .filter((str: string) => parseInt(str))
            .map(toNumber)
            .reduce((total: number, num: number) => total + num, spare);
    }

    if (twoRolls.includes('-')) {
        return twoRolls
            .split('')
            .filter((str: string) => parseInt(str))
            .map(toNumber)
            .reduce(sumUp, 0);
    }

    return twoRolls
        .split('')
        .map(toNumber)
        .reduce(sumUp, 0);
};

// calculateScoreFor :: String --> Int
const calculateScoreFor = (allRolls: string) => {
    return calculateFrame(allRolls);
};

describe('Bowling Game', () => {
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

    test('should calculate score for a spare', () => {
        const result = calculateFrame('5/');
        expect(result).toBe(10);
    });

    test('should calculate score for a spare', () => {
        const result = calculateFrame('7/');
        expect(result).toBe(10);
    });
});
