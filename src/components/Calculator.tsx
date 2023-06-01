import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { format, differenceInMonths, parseISO } from "date-fns";
import discountValues from "../constants/discountValues";

function Calculator() {
  const [monthlyBenefit, setMonthlyBenefit] = useState<number>(1000);
  const [denialDate, setDenialDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [currentDate, setCurrentDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  ); // suggest today's date as default
  const [policyEndDate, setPolicyEndDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  let [total, setTotal] = useState<number>(0);

  let denialDateObject;
  let currentDateObject;
  let policyEndDateObject;

  // Monthly benefit amount: $1000
  // Date of denial: January 1, 2023
  // Current date: July 1, 2023
  // Policy end date: January 1, 2043

  const handleMonthlyBenefitChange = (e) => {
    setMonthlyBenefit(e.target.value);
  };

  const handleDenialDateChange = (e) => {
    setDenialDate(e.target.value); //to fix
  };
  const handleCurrentDateChange = (e) => {
    setCurrentDate(e.target.value);
  };

  const handlePolicyEndDateChange = (e) => {
    setPolicyEndDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    denialDateObject = parseISO(denialDate);
    currentDateObject = parseISO(currentDate);
    policyEndDateObject = parseISO(policyEndDate);

    // Calculate the difference in months between denialDate and currentDate
    const monthsFromDenial: number = differenceInMonths(
      currentDateObject,
      denialDateObject
    );

    // Calculate the difference in months between policyEndDate and currentDate
    const monthsFromPolicyEnd: number = differenceInMonths(
      policyEndDateObject,
      currentDateObject
    );

    const pastBenefit = monthsFromDenial * monthlyBenefit;
    const futureBenefit = monthsFromPolicyEnd * monthlyBenefit;

    // let pastBenefit = currentDate - ; // difference between date of denial and current date
    // const futureBenefit = 0;
    setTotal(pastBenefit + futureBenefit);
    console.log(
      "total:",
      total,
      "past benefit:",
      pastBenefit,
      "future benefit: ",
      futureBenefit
    );
    console.log(total);
    // const result =
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Calculate your policy value:</legend>

          <Form.Group className="mb-4 w-25" controlId="monthlyBenefit">
            <Form.Label className="text-left">
              Monthly Benefit in CAD:
            </Form.Label>
            <Form.Control
              type="number"
              min="0"
              className="form-control"
              value={monthlyBenefit}
              onChange={handleMonthlyBenefitChange}
            />
          </Form.Group>

          <Form.Group className="mb-4 w-25" controlId="denialDate">
            <Form.Label>Date of Denial:</Form.Label>
            <Form.Control
              type="date"
              value={denialDate}
              onChange={handleDenialDateChange}
            />
          </Form.Group>

          <Form.Group className="mb-4 w-25" controlId="currentDate">
            <Form.Label>Current Date:</Form.Label>
            <Form.Control
              type="date"
              value={currentDate}
              onChange={handleCurrentDateChange}
            />
          </Form.Group>

          <Form.Group className="mb-4 w-25" controlId="policyEndDate">
            <Form.Label>End Date of Policy:</Form.Label>
            <Form.Control
              type="date"
              value={policyEndDate}
              onChange={handlePolicyEndDateChange}
            />
          </Form.Group>

          <Button className="mb-4 w-25" variant="primary" type="submit">
            Calculate Policy Value
          </Button>
          <p>Policy value in CAD: ${total}</p>
        </fieldset>
      </Form>
    </>
  );
}
export default Calculator;
