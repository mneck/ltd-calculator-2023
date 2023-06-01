import IntroText from "../components/IntroText";
import PastBenefitsText from "../components/PastBenefitsText";
import FutureBenefitsText from "../components/FutureBenefitsText";
import Calculator from "../components/Calculator";

function Home() {
  return (
    <>
      <h1>LTD Benefits Calculator</h1>
      <div className="card">
        <Calculator />
        <h2>How does this work?</h2>
        <IntroText />
        <PastBenefitsText />
        <FutureBenefitsText />
      </div>
    </>
  );
}

export default Home;
