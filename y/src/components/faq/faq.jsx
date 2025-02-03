import "./faq.scss";
import { Link, useLocation } from "react-router-dom";
const Faq = ({ mainData }) => {
  const location = useLocation();
  const getFaqData = () => {
    switch (location.pathname) {
      case "/":
        return mainData?.faqData?.homeFaq;
      case "/about-us":
        return mainData?.faqData?.aboutUsFaq;
      case "/credit-cards":
        return mainData?.faqData?.creditCardFaq;
      case "/loans/personal-loan":
        return mainData?.faqData?.personalLoanFaq;
      case "/loans/home-loan":
        return mainData?.faqData?.homeLoanFaq;
      case "/loans/business-loan":
        return mainData?.faqData?.businessLoanFaq;
      case "/loans/loan-against-property":
        return mainData?.faqData?.loanAgainstPropertyFaq;
      case "/loans/car-loan":
        return mainData?.faqData?.carLoanFaq;
        case "/loans/education-loan":
          return mainData?.faqData?.educationLoanFaq;
        case "/loans/gold-loan":
          return mainData?.faqData?.goldLoanFaq;
      //   case "/insurance/All-Insurance":
      //     return bannerImage1;
      //   case "/insurance/life-insurance":
      //     return bannerImage1;
      //   case "/insurance/Health-Insurance":
      //     return bannerImage1;
      //   case "/insurance/General-Insurance":
      //     return bannerImage1;
      //   case "/dsa/personal-loan-dsa":
      //     return bannerImage1;
      //   case "/dsa/home-loan-dsa":
      //     return bannerImage1;
      //   case "/dsa/business-loan-dsa":
      //     return bannerImage1;
      //   case "/dsa/loan-against-property-dsa":
      //     return bannerImage1;
      //   case "/dsa/education-loan-dsa":
      //     return bannerImage1;
      //   case "/dsa/auto-loan-dsa":
      //     return bannerImage1;
      //   case "/dsa/credit-card-dsa":
      //     return bannerImage1;
      //   case "/loans/features":
      //     return bannerImage1;
      //   //   case "/insurance/contact-us":
      //   //     return bannerImage1;
    }
  };
  return (
    <div className="faq">
      <h2 className="h2-font margin-t-2">FAQs</h2>
      <div className="accordion margin-t-2" id="accordionExample">
        {getFaqData()?.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {item.title}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Faq;
