import { calculateCompoundInterest } from "./compoundInterestCalculator";

describe('calculateCompoundInterest', () => {
  it('should calculate compound interest correctly when interest is paid monthly', () => {
    const depositAmount1 = 10000;
    const interestRate1 = 1.1;
    const investmentTerm1 = 36;
    const interestPaidFrequency1 = 12;
    const expectedInterest1 = 10335.35;
    const result1 = calculateCompoundInterest(depositAmount1, interestRate1, investmentTerm1, interestPaidFrequency1);
    expect(result1).toBe(expectedInterest1);
  });

  it('should calculate compound interest correctly when interest is paid quarterly', () => {
    const depositAmount2 = 10000;
    const interestRate2 = 1.1;
    const investmentTerm2 = 36;
    const interestPaidFrequency2 = 4;
    const expectedInterest2 = 10335.04;
    const result2 = calculateCompoundInterest(depositAmount2, interestRate2, investmentTerm2, interestPaidFrequency2);
    expect(result2).toBe(expectedInterest2);
  });

  it('should calculate compound interest correctly when interest is paid annually', () => {
    const depositAmount3 = 10000;
    const interestRate3 = 1.1;
    const investmentTerm3 = 36;
    const interestPaidFrequency3 = 1;
    const expectedInterest3 = 10333.64;
    const result3 = calculateCompoundInterest(depositAmount3, interestRate3, investmentTerm3, interestPaidFrequency3);
    expect(result3).toBe(expectedInterest3);
  });

  it('should return 0 when deposit amount is 0', () => {
    const depositAmount = 0;
    const interestRate = 1.1;
    const investmentTerm = 36;
    const interestPaidFrequency = 12;
    const result = calculateCompoundInterest(depositAmount, interestRate, investmentTerm, interestPaidFrequency);
    expect(result).toBe(0);
  });

  it('should return the initial deposit amount when investment term is 0', () => {
    const depositAmount = 10000;
    const interestRate = 1.1;
    const investmentTerm = 0;
    const interestPaidFrequency = 12;
    const result = calculateCompoundInterest(depositAmount, interestRate, investmentTerm, interestPaidFrequency);
    expect(result).toBe(depositAmount);
  });

  it('should return the initial deposit amount when interest rate is 0', () => {
    const depositAmount = 10000;
    const interestRate = 0;
    const investmentTerm = 36;
    const interestPaidFrequency = 12;
    const result = calculateCompoundInterest(depositAmount, interestRate, investmentTerm, interestPaidFrequency);
    expect(result).toBe(depositAmount);
  });

  it('should return the initial deposit amount when the interest paid frequency is 0', () => {
    const depositAmount = 10000;
    const interestRate = 1.1;
    const investmentTerm = 36;
    const interestPaidFrequency = 0;
    const result = calculateCompoundInterest(depositAmount, interestRate, investmentTerm, interestPaidFrequency);
    expect(result).toBe(depositAmount);
  });
});