import { useState } from "react";
import FancyText from "../components/FancyText";
import QuotesGenerator from "../components/QuotesGenerator";
import quotes from "../quotes";
function App() {
  return (
    <main>
      <FancyText title />
      <QuotesGenerator quotes={quotes} />
    </main>
  );
}

export default App;
