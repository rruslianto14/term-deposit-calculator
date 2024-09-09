import { render, screen, fireEvent } from "@testing-library/react";
import { TermDepositCalc } from "./pages/termDepositCalculator/TermDepositCalc";

describe("Term Deposit Calculator Component", () => {
  it("should display the correct output when form values are valid and interest paid frequency is set to 'Monthly'", () => {
    render(<TermDepositCalc />);

    fireEvent.input(screen.getByTestId("depositAmountInput"), {
      target: {
        value: 10000,
      },
    });

    fireEvent.input(screen.getByTestId("interestRateInput"), {
      target: {
        value: 1.1,
      },
    });

    fireEvent.input(screen.getByTestId("investmentTermInput"), {
      target: {
        value: 36,
      },
    });

    fireEvent.change(screen.getByTestId("interestPaidFrequencyInput"), {
      target: {
        value: 12,
      },
    });

    expect(screen.getByTestId("totalBalanceOutput")).toHaveTextContent(
      "$10,335.35"
    );
  });

  it("should display the correct output when form values are valid and interest paid frequency is set to 'Quarterly'", () => {
    render(<TermDepositCalc />);

    fireEvent.input(screen.getByTestId("depositAmountInput"), {
      target: {
        value: 10000,
      },
    });

    fireEvent.input(screen.getByTestId("interestRateInput"), {
      target: {
        value: 1.1,
      },
    });

    fireEvent.input(screen.getByTestId("investmentTermInput"), {
      target: {
        value: 36,
      },
    });

    fireEvent.change(screen.getByTestId("interestPaidFrequencyInput"), {
      target: {
        value: 4,
      },
    });

    expect(screen.getByTestId("totalBalanceOutput")).toHaveTextContent(
      "$10,335.04"
    );
  });

  it("should display the correct output when form values are valid and interest paid frequency is set to 'Annually'", () => {
    render(<TermDepositCalc />);

    fireEvent.input(screen.getByTestId("depositAmountInput"), {
      target: {
        value: 10000,
      },
    });

    fireEvent.input(screen.getByTestId("interestRateInput"), {
      target: {
        value: 1.1,
      },
    });

    fireEvent.input(screen.getByTestId("investmentTermInput"), {
      target: {
        value: 36,
      },
    });

    fireEvent.change(screen.getByTestId("interestPaidFrequencyInput"), {
      target: {
        value: 1,
      },
    });

    expect(screen.getByTestId("totalBalanceOutput")).toHaveTextContent(
      "$10,333.64"
    );
  });

  it("should display the correct output when form values are valid and interest paid frequency is set to 'At Maturity'", () => {
    render(<TermDepositCalc />);

    fireEvent.input(screen.getByTestId("depositAmountInput"), {
      target: {
        value: 10000,
      },
    });

    fireEvent.input(screen.getByTestId("interestRateInput"), {
      target: {
        value: 1.1,
      },
    });

    fireEvent.input(screen.getByTestId("investmentTermInput"), {
      target: {
        value: 36,
      },
    });

    fireEvent.change(screen.getByTestId("interestPaidFrequencyInput"), {
      target: {
        value: 0,
      },
    });

    expect(screen.getByTestId("totalBalanceOutput")).toHaveTextContent(
      "$10,330.00"
    );
  });

  it("should display an error message when Deposit Amount is blank", async () => {
    render(<TermDepositCalc />);

    fireEvent.input(screen.getByTestId("depositAmountInput"), {
      target: {
        value: "",
      },
    });

    fireEvent.input(screen.getByTestId("interestRateInput"), {
      target: {
        value: 1.1,
      },
    });

    fireEvent.input(screen.getByTestId("investmentTermInput"), {
      target: {
        value: 36,
      },
    });

    fireEvent.change(screen.getByTestId("interestPaidFrequencyInput"), {
      target: {
        value: 0,
      },
    });
    
    expect(await screen.findAllByRole("alert")).toHaveLength(1);

  });

  it("should display an error message when Interest Rate is blank", async () => {
    render(<TermDepositCalc />);

    fireEvent.input(screen.getByTestId("depositAmountInput"), {
      target: {
        value: 10000,
      },
    });

    fireEvent.input(screen.getByTestId("interestRateInput"), {
      target: {
        value: "",
      },
    });

    fireEvent.input(screen.getByTestId("investmentTermInput"), {
      target: {
        value: 36,
      },
    });

    fireEvent.change(screen.getByTestId("interestPaidFrequencyInput"), {
      target: {
        value: 0,
      },
    });
    
    expect(await screen.findAllByRole("alert")).toHaveLength(1);

  });

  it("should display an error message when Investment Term is blank", async () => {
    render(<TermDepositCalc />);

    fireEvent.input(screen.getByTestId("depositAmountInput"), {
      target: {
        value: 10000,
      },
    });

    fireEvent.input(screen.getByTestId("interestRateInput"), {
      target: {
        value: 1.1,
      },
    });

    fireEvent.input(screen.getByTestId("investmentTermInput"), {
      target: {
        value: "",
      },
    });

    fireEvent.change(screen.getByTestId("interestPaidFrequencyInput"), {
      target: {
        value: 0,
      },
    });
    
    expect(await screen.findAllByRole("alert")).toHaveLength(1);

  });
});

