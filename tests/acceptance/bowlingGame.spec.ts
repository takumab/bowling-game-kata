// Input: String
// Output: Integer (Score)
// calculateScoreFor :: String --> Int
const calculateScoreFor = (allRolls: string) => {
    const toNumber = (roll: string): number => Number(roll);
    const sumUp = (total: number, roll: number): number => roll + total;

    if (allRolls.includes('-')) {
        return allRolls
            .split('')
            .filter((str: string) => parseInt(str))
            .map(toNumber)
            .reduce(sumUp, 0);
    }

    return allRolls
        .split('')
        .map(toNumber)
        .reduce(sumUp, 0);
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
        const result = calculateScoreFor(pins);
        expect(result).toBe(expectedScore);
    });
});
