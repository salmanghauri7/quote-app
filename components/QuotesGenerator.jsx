import { useState } from "react";
import FancyText from "./FancyText";
export default function QuotesGenerator({ quotes }) {
  const [index, setState] = useState(0);
  let quoted = quotes[index];
  let next = () => setState((index + 1) % quotes.length);

  return (
    <>
      <FancyText quote={quoted} />
      <button onClick={next}>Click to see the next quote</button>
    </>
  );
}
