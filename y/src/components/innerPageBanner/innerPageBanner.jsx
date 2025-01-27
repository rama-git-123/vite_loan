import "./innerPageBanner.scss";
import bannerImage1 from "../../assets/images/banner-trade-en.webp";
import bannerImage2 from "../../assets/images/r1.jpeg";
const InnerPageBanner = ({ location }) => {
  const getBannerImage = () => {
    switch (location.pathname) {
      case "/about-us":
        return bannerImage1;
      case "/credit-cards":
        return bannerImage2;
      case "/loans/personal-loan":
        return bannerImage2;
      case "/loans/home-loan":
        return bannerImage1;
      case "/loans/business-loan":
        return bannerImage1;
      case "/loans/loan-against-property":
        return bannerImage1;
      case "/loans/car-loan":
        return bannerImage1;
      case "/loans/education-loan":
        return bannerImage1;
      case "/loans/gold-loan":
        return bannerImage1;
      case "/insurance/All-Insurance":
        return bannerImage1;
      case "/insurance/life-insurance":
        return bannerImage1;
      case "/insurance/Health-Insurance":
        return bannerImage1;
      case "/insurance/General-Insurance":
        return bannerImage1;
      case "/dsa/personal-loan-dsa":
        return bannerImage1;
      case "/dsa/home-loan-dsa":
        return bannerImage2;
      case "/dsa/business-loan-dsa":
        return bannerImage1;
      case "/dsa/loan-against-property-dsa":
        return bannerImage1;
      case "/dsa/education-loan-dsa":
        return bannerImage1;
      case "/dsa/auto-loan-dsa":
        return bannerImage1;
      case "/dsa/credit-card-dsa":
        return bannerImage1;
      //   case "/insurance/contact-us":
      //     return bannerImage1;
    }
  };
  return (
    <div className="banner-container">
      <div>
        <img src={getBannerImage()} alt="banner" />
      </div>
    </div>
  );
};

export default InnerPageBanner;
