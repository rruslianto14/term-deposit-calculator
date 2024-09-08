const calculateSimpleInterest = (
  depositAmount: number,
  interestRate: number,
  investmentTerm: number
) => {
  const totalBalance =
    depositAmount * (1 + (interestRate / 100) * (investmentTerm / 12));

  return Math.round((totalBalance + Number.EPSILON) * 100) / 100;
};

export { calculateSimpleInterest };
