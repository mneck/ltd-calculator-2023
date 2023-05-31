import IntroText from "../components/IntroText";
import PastBenefitsText from "../components/PastBenefitsText";
import FutureBenefitsText from "../components/FutureBenefitsText";
import discountValues from "../constants/discountValues";

function Home() {
  return (
    <>
      <h1>LTD Benefits Calculator</h1>
      <div className="card">
        <h2>How does this work?</h2>
        <IntroText />
        <PastBenefitsText />
        <FutureBenefitsText />

        <p>
          Here is the first discount value: {discountValues[0].discountValue}
        </p>
      </div>
    </>
  );
}

export default Home;
