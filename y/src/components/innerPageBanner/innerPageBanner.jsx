import "./innerPageBanner.scss";
import bannerImage1 from "../../assets/images/banner-trade-en.webp";
import personalloanImage1 from "../../assets/images/personal-loan.jpg";
import homeloanImage from "../../assets/images/home-loan.jpg";
import businessloanImage from "../../assets/images/business-loan.jpg";
import propertyloanImage from "../../assets/images/property-loan.jpg";
import carloanImage from "../../assets/images/car-loan.jpg";
import educationloanImage from "../../assets/images/education-loan.jpg";
import goldloanImage from "../../assets/images/gold-loan.jpg";
import allinsuranceimage from "../../assets/images/allinsurance.jpg";
import lifeinsuranceimage from "../../assets/images/lifeinsurance.jpg";
import healthinsuranceimage from "../../assets/images/healthinsurance.jpg";
import generalinsuranceimage from "../../assets/images/generalinsurance.jpg";
const InnerPageBanner = ({ location }) => {
  const getBannerImage = () => {
    switch (location.pathname) {
      case "/about-us":
        return bannerImage1;
      case "/credit-cards":
        return bannerImage1;
      case "/loans/personal-loan":
        return personalloanImage1;
      case "/loans/home-loan":
        return homeloanImage;
      case "/loans/business-loan":
        return businessloanImage;
      case "/loans/loan-against-property":
        return propertyloanImage;
      case "/loans/car-loan":
        return carloanImage;
      case "/loans/education-loan":
        return educationloanImage;
      case "/loans/gold-loan":
        return goldloanImage;
      case "/insurance/All-Insurance":
        return allinsuranceimage;
      case "/insurance/life-insurance":
        return lifeinsuranceimage;
      case "/insurance/Health-Insurance":
        return healthinsuranceimage;
      case "/insurance/General-Insurance":
        return generalinsuranceimage;
      case "/dsa/personal-loan-dsa":
        return personalloanImage1;
      case "/dsa/home-loan-dsa":
        return homeloanImage;
      case "/dsa/business-loan-dsa":
        return businessloanImage;
      case "/dsa/loan-against-property-dsa":
        return propertyloanImage;
      case "/dsa/education-loan-dsa":
        return educationloanImage;
      case "/dsa/auto-loan-dsa":
        return bannerImage1;
      case "/dsa/credit-card-dsa":
        return bannerImage1;
      case "/loans/features":
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
