import { expect } from 'chai';
import calculateMonthsToSave from '../src/savingsCalculator.js';
import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();
const testDataPath = path.join(__dirname, 'tests', 'testData.json');
const testData = JSON.parse(fs.readFileSync(testDataPath, 'utf8'));

testData.forEach(data => {
  if (data.expected === "Infinity") {
    data.expected = Infinity;
  }
});

describe('Savings Calculator', () => {
  testData.forEach(({ initialAmount, monthlySavings, targetAmount, expected }) => {
    it(`need ${expected} months to save with initialAmount ${initialAmount}, monthlySavings ${monthlySavings}, targetAmount ${targetAmount}`, () => {
      expect(calculateMonthsToSave(initialAmount, monthlySavings, targetAmount)).to.equal(expected);
    });
  });
});