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

  const handleMonthlyBenefitChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMonthlyBenefit(Number(e.target.value));
  };

  const handleDenialDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDenialDate(e.target.value);
  };
  const handleCurrentDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentDate(e.target.value);
  };

  const handlePolicyEndDateChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPolicyEndDate(e.target.value);
  };

  const handleSubmit = (e: any) => {
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
    const monthsToPolicyEnd: number = differenceInMonths(
      policyEndDateObject,
      currentDateObject
    );

    const yearsToPolicyEnd: number = Math.floor(monthsToPolicyEnd / 12);

    const pastBenefit: number = monthsFromDenial * monthlyBenefit;
    const futureBenefit: number =
      12 * monthlyBenefit * discountValues[yearsToPolicyEnd - 1].discountValue;

    // let pastBenefit = currentDate - ; // difference between date of denial and current date
    // const futureBenefit = 0;
    setTotal(Number((pastBenefit + futureBenefit).toFixed(2)));
    console.log(
      "total:",
      total,
      "past benefit:",
      pastBenefit,
      "months from policy end: ",
      monthsToPolicyEnd,
      "years to policy end: ",
      yearsToPolicyEnd,
      "discount value for future benefit: ",
      discountValues[yearsToPolicyEnd - 1].discountValue
    );
    console.log(total);
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
