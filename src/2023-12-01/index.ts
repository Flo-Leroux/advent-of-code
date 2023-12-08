import { input, testInput } from './input';

export const exec = () => {
    return input
        .trim()
        .split('\n')
        .map((line) => line.trim().split(''))
        .map((line) => [
            line.find((char) => !isNaN(parseInt(char, 10))),
            line.findLast((char) => !isNaN(parseInt(char, 10))),
        ].join(''))
        .map((value) => parseInt(value, 10))
        .reduce((a, b) => a + b);
};
