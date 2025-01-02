import Carousel from "../components/carousel/carousel";
import CardLoanSection from "../components/cardLoanSection/cardLoanSection";
import InsuranceSection from "../components/insuranceSection/insuranceSection";
const Home = ({ mainData }) => {
  return (
    <>
      <Carousel />
      <div className="container py-4 px-3 mx-auto">
        <h3>We Facilitate</h3>
        <p>
          Wide Range of Financial Products That suits your customer's needs!
        </p>
        <CardLoanSection mainData={mainData} />
        <InsuranceSection mainData={mainData} />
      </div>
    </>
  );
};

export default Home;
