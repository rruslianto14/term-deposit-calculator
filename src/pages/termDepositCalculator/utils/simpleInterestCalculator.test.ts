import { calculateSimpleInterest } from "./simpleInterestCalculator";

describe("calculateSimpleInterest function", () => {
  it("should calculate simple interest correctly", () => {
    const depositAmount = 10000;
    const interestRate = 1.1;
    const investmentTerm = 36;

    expect(
      calculateSimpleInterest(depositAmount, interestRate, investmentTerm)
    ).toBe(10330);
  });

  it('returns the initial deposit amount when the deposit amount is zero', () => {
    const depositAmount = 0;
    const interestRate = 1.1;
    const investmentTerm = 36;

    expect(calculateSimpleInterest(depositAmount, interestRate, investmentTerm)).toBe(depositAmount);
  });

  it('returns the initial deposit amount when the interest rate is zero', () => {
    const depositAmount = 10000;
    const interestRate = 0;
    const investmentTerm = 36;

    expect(calculateSimpleInterest(depositAmount, interestRate, investmentTerm)).toBe(depositAmount);
  });

  it('returns the initial deposit amount when the investment term is zero', () => {
    const depositAmount = 10000;
    const interestRate = 1.1;
    const investmentTerm = 0;

    expect(calculateSimpleInterest(depositAmount, interestRate, investmentTerm)).toBe(depositAmount);
  });
});



