import { render, screen } from "@testing-library/react";
import App from "./App";

test('render element', async () => {
  render(<App />);

  await screen.findByText(/Term Deposit Calculator/i)
});

test('calculates the interest', async () => {
  render(<App />);

  const interest = await screen.findByTestId("interest")

  expect(interest).toHaveTextContent("3.70")
});
