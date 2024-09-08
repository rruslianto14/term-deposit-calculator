import { Controller, useForm } from "react-hook-form";
import { InferType, number, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  NumberInput,
  NumberInputField,
  Select,
  Tooltip,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

import { interestPaidFrequencies } from "./fixtures/investmentTerms";
import { calculateSimpleInterest } from "./utils/simpleInterestCalculator";
import { calculateCompoundInterest } from "./utils/compoundInterestCalculator";

const schema = object({
  depositAmount: number()
    .required()
    .typeError("Please enter a starting deposit amount"),
  interestRate: number().required().typeError("Please enter an interest rate"),
  investmentTerm: number()
    .required()
    .typeError("Please enter an investment term"),
  interestPaidFrequency: number()
    .required()
    .typeError("Please select your interest payment frequency"),
});

type FormFields = InferType<typeof schema>;

const TermDepositCalc = () => {
  const [totalBalance, setTotalBalance] = useState(0);

  const {
    control,
    formState: { errors },
    watch,
  } = useForm<FormFields>({
    defaultValues: {
      depositAmount: 1000,
      interestRate: 1,
      investmentTerm: 1,
      interestPaidFrequency: interestPaidFrequencies[0].frequency,
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  const [depositAmount, interestRate, investmentTerm, interestPaidFrequency] =
    watch([
      "depositAmount",
      "interestRate",
      "investmentTerm",
      "interestPaidFrequency",
    ]);

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      return;
    }

    let totalInterest;

    // @ts-expect-error
    if (interestPaidFrequency === "0") {
      totalInterest = calculateSimpleInterest(
        depositAmount,
        interestRate,
        investmentTerm
      );
    } else {
      totalInterest = calculateCompoundInterest(
        depositAmount,
        interestRate,
        investmentTerm,
        interestPaidFrequency
      );
    }

    setTotalBalance(totalInterest);
  }, [
    depositAmount,
    interestRate,
    investmentTerm,
    interestPaidFrequency,
    errors,
  ]);

  return (
    <>
      <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Term Deposit Calculator
          </h1>
          <p className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Use our term deposit calculator to calculate how much interest you
            could earn using a term deposit.
          </p>
        </div>
        <div className="p-4">
          <h2 className="mt-2 mb-2 text-2xl sm:font-bold font-medium tracking-tight text-slate-200 sm:text-xl">
            Your Term Deposit details
          </h2>
          <form>
            <Controller
              control={control}
              name="depositAmount"
              render={({ field: { onChange, value } }) => (
                <FormControl isInvalid={!!errors?.depositAmount}>
                  <FormLabel htmlFor="depositAmount">
                    Deposit Amount ($) &nbsp;
                    <Tooltip
                      label="The amount of money you would like to deposit between $1,000 and $1,500,000"
                      fontSize="md"
                      placement="top"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
                  </FormLabel>

                  <NumberInput
                    onChange={onChange}
                    value={value}
                    min={1000}
                    max={1500000}
                    precision={0}
                  >
                    <NumberInputField />
                  </NumberInput>

                  <FormErrorMessage>
                    {errors.depositAmount &&
                      errors.depositAmount.message?.toString()}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="interestRate"
              render={({ field: { onChange, value } }) => (
                <FormControl isInvalid={!!errors?.interestRate}>
                  <FormLabel htmlFor="interestRate">
                    Interest Rate (% p.a.) &nbsp;
                    <Tooltip
                      label="The rate used to calculate your interest earned"
                      fontSize="md"
                      placement="top"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
                  </FormLabel>
                  <NumberInput
                    onChange={onChange}
                    value={value}
                    min={0}
                    max={15}
                    precision={2}
                  >
                    <NumberInputField />
                  </NumberInput>

                  <FormErrorMessage>
                    {errors.interestRate &&
                      errors.interestRate.message?.toString()}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="investmentTerm"
              render={({ field: { onChange, value } }) => (
                <FormControl isInvalid={!!errors?.investmentTerm}>
                  <FormLabel htmlFor="investmentTerm">
                    Investment Term (months) &nbsp;
                    <Tooltip
                      label="The period you would like to leave your savings invested between 1 month and 5 years"
                      fontSize="md"
                      placement="top"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
                  </FormLabel>

                  <NumberInput
                    onChange={onChange}
                    value={value}
                    min={1}
                    max={60}
                    precision={0}
                  >
                    <NumberInputField />
                  </NumberInput>

                  <FormErrorMessage>
                    {errors.investmentTerm &&
                      errors.investmentTerm.message?.toString()}
                  </FormErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="interestPaidFrequency"
              render={({ field: { onChange, value } }) => (
                <FormControl isInvalid={!!errors?.interestPaidFrequency}>
                  <FormLabel htmlFor="interestPaidFrequency">
                    Interest Paid &nbsp;
                    <Tooltip
                      label="The frequency at which interest is paid"
                      fontSize="md"
                      placement="top"
                    >
                      <InfoOutlineIcon />
                    </Tooltip>
                  </FormLabel>

                  <Select onChange={onChange} value={value}>
                    {interestPaidFrequencies.map((interestPaid) => (
                      <option
                        value={interestPaid.frequency}
                        key={interestPaid.name}
                      >
                        {interestPaid.name}
                      </option>
                    ))}
                  </Select>

                  <FormErrorMessage>
                    {errors.interestPaidFrequency &&
                      errors.interestPaidFrequency.message?.toString()}
                  </FormErrorMessage>
                </FormControl>
              )}
            />
          </form>
        </div>
      </div>
      <div
        style={{ backgroundColor: "blue" }}
        className="pt-8 px-4 lg:w-1/2 lg:py-36"
      >
        <div
          className="flex flex-col items-center"
          style={{ backgroundColor: "yellow" }}
        >
          <h3 className="text-2xl font-bold">
            Term Deposit Total balance at maturity
          </h3>
          <p className=" text-6xl my-3">
            $
            {Object.keys(errors).length !== 0
              ? "-"
              : totalBalance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
          </p>
          <hr style={{ borderTop: "3px solid #bbb", width: "80%" }} />
          <h4 className="text-xl font-bold">Total interest earned</h4>
          <p className=" text-3xl">
            $
            {Object.keys(errors).length !== 0
              ? "-"
              : totalBalance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
          </p>
        </div>
      </div>
    </>
  );
};

export { TermDepositCalc };
