import "./leadingSection.scss";
import expImage from "../../assets/images/exp.jpg";
import brancImage from "../../assets/images/branch.png";
import partnerImage from "../../assets/images/partner.png";
import distributeImage from "../../assets/images/distribute.webp";
const LeadingSection = () => {
  return (
    <div className="leading-section">
      <div className="container">
        <h2>My Scope – India’s Leading Loan Distribution Company</h2>
        <div className="row ">
          <div className="col-sm-3 leading-card">
            <img src={expImage} />
            <p>5 + Years of Experience</p>
          </div>
          <div className="col-sm-3 leading-card">
            <img src={partnerImage} />
            <p>40 + Partner Banks & NBFCs</p>
          </div>
          <div className="col-sm-3 leading-card">
            <img src={brancImage} />
            <p>40 + Branches Across India</p>
          </div>
          <div className="col-sm-3 leading-card">
            <img src={distributeImage} />
            <p>₹ 1,000 cr+ Successful Disbursal</p>
          </div>
        </div>
        <p>
          At My Scope, we are committed to helping clients reach their
          financial objectives with tailored solutions. With a PAN India
          presence in over 4,000 cities, we stand as one of the nation’s leading
          credit lending establishments. Founded by financial professionals with
          over 5 years of experience, we’ve proudly served over 1 million
          clients, disbursing loans exceeding ₹1,000 crores through our
          partnerships with 40+ Banks and NBFCs.
        </p>
      </div>
    </div>
  );
};
export default LeadingSection;
