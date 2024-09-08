const calculateCompoundInterest = (
  depositAmount: number,
  interestRate: number,
  investmentTerm: number,
  interestPaidFrequency: number
) => {
  const totalBalance =
    depositAmount *
    (1 + interestRate / 100 / interestPaidFrequency) **
      ((interestPaidFrequency * investmentTerm) / 12);
  
      return Math.round((totalBalance + Number.EPSILON) * 100) / 100;
};

export { calculateCompoundInterest };
