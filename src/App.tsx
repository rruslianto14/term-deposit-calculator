import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import { Layout } from "./components/Layout";
import { TermDepositCalc } from "./pages/termDepositCalculator/TermDepositCalc";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <TermDepositCalc />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
