import sum from './sum';

describe('sum function', () => {
  it('sum two numbers', () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  })
})
