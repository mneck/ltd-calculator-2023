import { Link, useNavigate } from "react-router-dom";
import PresentValueTable from "../pages/PresentValueTable";

function FutureBenefitsText() {
  return (
    <>
      <p>
        <b>Future benefits</b> owing are more complicated to calculate because
        compensation for future amounts accounts for interest on investments,
        inflation, and other factors to determine how a lump sum received today
        would equate to the same amount of money received over regular periods
        in the future. To do that, we can look at the relevant column of a
        present value table.
      </p>

      <p>
        <b>What is a present value table?</b> A present value table, also known
        as a discount factor table or present value factor table, is a financial
        tool that provides a set of predetermined values used to calculate the
        present value of future cash flows. It is a reference table used in
        finance and investment analysis to determine the worth of a future sum
        of money in today's terms, considering the time value of money. The
        table typically lists different interest rates or discount rates along
        with corresponding factors or values. These values represent the present
        value of $1 to be received at the end of a specific period, assuming a
        particular interest or discount rate. By multiplying the future cash
        flow by the appropriate discount factor from the table, you can
        calculate its present value.
      </p>
      <p>
        You can find examples of the present value table below in various
        sources, including the 1995 edition of{" "}
        <i>Litigation Accounting, The Quantification of Economic Damages</i> by
        Mark Berenblut and Howard Rosen.
      </p>
      <p>The present value table for the years 1-48 is provided below:</p>
      <PresentValueTable />

      <p>
        <b>How do we know which column to use for our calculations?</b> The
        multiplier we want to use will be specified by the law relevant to that
        jurisdiction. In British Columbia, for example, the discount rate is
        1.5% according to section 1(a) of the{" "}
        <a href="https://canlii.ca/t/85j8">
          <i>Law and Equity Regulation</i>
        </a>
        .
      </p>
    </>
  );
}

export default FutureBenefitsText;
