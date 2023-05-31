import { useState } from "react";
import "./App.css";
import discountValues from "./discountValues";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>LTD Benefits Calculator</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <h2>How does this work?</h2>
        <p>
          Let's say you're disable from working and you receive a monthly amount
          from an insurance company under a private long-term disability
          insurance policy. Now let's say that insurance company (the "insurer")
          has decided to terminate your benefits, but your doctors say you are
          still disabled and unable to work. If you want to sue for those
          benefits, you will need to account for past benefits owing and future
          benefit.
        </p>
        <p>
          <b>Past benefits</b> are relatively easy to calculate. This would be
          the monthly amount you are owed multiplied by the number of months
          between the last day you received benefits and the day you receive
          compensation. So if the last date you received benefits was December
          31, 2022, and the date you hypothetically receive compensation is July
          15, we could say you were denied benefits for 5 months and 15 days, or
          5.5 months. If you received a monthly benefit of $1000, then your past
          benefits owing would be $5,500 (5.5 x $1000).
        </p>
        <p>
          <b>Future benefits</b> owing are more complicated to calculate because
          compensation for future amounts accounts for interest on investments,
          inflation, and other factors to determine how a lump sum received
          today would equate to the same amount of money received over regular
          periods in the future. To do that, we can look at the relevant column
          of a present value table.
        </p>

        <p>
          <b>What is a present value table?</b> A present value table, also
          known as a discount factor table or present value factor table, is a
          financial tool that provides a set of predetermined values used to
          calculate the present value of future cash flows. It is a reference
          table used in finance and investment analysis to determine the worth
          of a future sum of money in today's terms, considering the time value
          of money. The table typically lists different interest rates or
          discount rates along with corresponding factors or values. These
          values represent the present value of $1 to be received at the end of
          a specific period, assuming a particular interest or discount rate. By
          multiplying the future cash flow by the appropriate discount factor
          from the table, you can calculate its present value.
        </p>
        <p></p>

        <p>
          Here is the first discount value: {discountValues[0].discountValue}
        </p>
      </div>
    </>
  );
}

export default App;
