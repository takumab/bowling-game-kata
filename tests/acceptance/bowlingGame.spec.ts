// Input: String
// Output: Integer (Score)
const calculateScoreFor = (allRolls: string) => {
    const toNumber = (roll: string) => Number(roll);
    const sumUp = (total: number, roll: number) => roll + total;

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
});
