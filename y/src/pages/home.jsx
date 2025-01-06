import Carousel from "../components/carousel/carousel";
import CardLoanSection from "../components/cardLoanSection/cardLoanSection";
import InsuranceSection from "../components/insuranceSection/insuranceSection";
import LeadingSection from "../components/leadingSection/leadingSection";
const Home = ({ mainData }) => {
  return (
    <>
      <Carousel />
      <div className="container py-4 px-3 mx-auto">
        <CardLoanSection mainData={mainData} />
        <InsuranceSection mainData={mainData} />
        <LeadingSection />
      </div>
    </>
  );
};

export default Home;
