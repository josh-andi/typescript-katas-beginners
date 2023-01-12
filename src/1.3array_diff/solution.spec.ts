import { expect } from 'chai';

import { arrayDiff } from './solution';

describe('Array Diff', () => {
  it('Basic test should work', () => {
    expect(arrayDiff([], [4, 5])).to.eql([], 'a was [], b was [4,5]');
    expect(arrayDiff([3, 4], [3])).to.eql([4], 'a was [3, 4], b was [3]');
    expect(arrayDiff([1, 8, 2], [])).to.eql([1, 8, 2], 'a was [1, 8, 2], b was []');
    expect(arrayDiff([1, 2, 3], [1, 2])).to.eql([3], 'a was [1, 2, 3], b was [1, 2]');
  });
});