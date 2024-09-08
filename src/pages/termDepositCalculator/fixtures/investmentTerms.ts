type InterestPaid = {
  name: string;
  frequency: number;
};

const interestPaidFrequencies: InterestPaid[] = [
  {
    name: "Monthly",
    frequency: 12,
  },
  {
    name: "Quarterly",
    frequency: 4,
  },
  {
    name: "Annually",
    frequency: 1,
  },
  {
    name: "At Maturity",
    frequency: 0,
  },
];

export { interestPaidFrequencies };
