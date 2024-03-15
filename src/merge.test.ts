

import { merge } from '../src/merge';

describe('merge', () => {
    it('should merge and sort three arrays in ascending order', () => {
        const collection1 = [1, 2, 3];
        const collection2 = [4, 5, 6];
        const collection3 = [9, 8, 7];

        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const result = merge(collection1, collection2, collection3);

        expect(result).toEqual(expected);
    });

    it('should merge and sort three arrays with duplicate values in ascending order', () => {
        const collection1 = [1, 3, 3, 5];
        const collection2 = [2, 4, 4, 6];
        const collection3 = [6, 4, 2, 2];

        const expected = [1, 2, 2, 2, 3, 3, 4, 4, 4, 5, 6, 6];
        const result = merge(collection1, collection2, collection3);

        expect(result).toEqual(expected);
    });

    it('should merge and sort three arrays with empty arrays', () => {
        const collection1: number[] = [];
        const collection2: number[] = [];
        const collection3: number[] = [];

        const expected: number[] = [];
        const result = merge(collection1, collection2, collection3);

        expect(result).toEqual(expected);
    });
});

