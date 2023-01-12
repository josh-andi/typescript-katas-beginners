import { expect } from 'chai';

import { helloWorld } from './solution';

describe('Hello world', () => {
  it('should print a greeting message', () => {
    expect(helloWorld()).to.eql("Hello world!!!")
  });
});