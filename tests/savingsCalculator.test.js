import { expect } from 'chai';
import calculateMonthsToSave from '../src/savingsCalculator.js';

describe('Savings Calculator', () => {
  it('should calculate months to save with initialAmount less than targetAmount', () => {
    expect(calculateMonthsToSave(100, 50, 200)).to.equal(2);
  });

  it('should calculate months to save with initialAmount equal to targetAmount', () => {
    expect(calculateMonthsToSave(200, 50, 200)).to.equal(0);
  });

  it('should calculate months to save with initialAmount greater than targetAmount', () => {
    expect(calculateMonthsToSave(300, 50, 200)).to.equal(0);
  });

  it('should calculate months to save with zero monthly savings', () => {
    expect(calculateMonthsToSave(100, 0, 200)).to.equal(Infinity);
  });

  it('should calculate months to save with target already reached', () => {
    expect(calculateMonthsToSave(500, 50, 200)).to.equal(0);
  });
});