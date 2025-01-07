import Carousel from "../components/carousel/carousel";
import CardLoanSection from "../components/cardLoanSection/cardLoanSection";
import InsuranceSection from "../components/insuranceSection/insuranceSection";
import LeadingSection from "../components/leadingSection/leadingSection";
import AdvantageSection from "../components/advantageSection/advantageSection";
import ChannelPartner from "../components/channelPartner/channelPartner";
import Feedback from "../components/feedback/feedback";
import Coustomer from "../components/coustomers/coustomer";
import Faq from "../components/faq/faq";
const Home = ({ mainData }) => {
  return (
    <>
      <Carousel />
      <div className="container py-4 px-3 mx-auto">
        <CardLoanSection mainData={mainData} />
        <InsuranceSection mainData={mainData} />
        <LeadingSection />
        <AdvantageSection mainData={mainData} />
        <ChannelPartner mainData={mainData} />
        <Feedback mainData={mainData} />
        <Faq mainData={mainData} />
        <Coustomer />
      </div>
    </>
  );
};

export default Home;
