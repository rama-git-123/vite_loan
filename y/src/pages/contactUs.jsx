import { Link, useLocation } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/breadcrumb";
const ContactUs = () => {
  const location = useLocation();
  return (
    <div className="container">
      <Breadcrumb location={location} page={"contact us"} />
    </div>
  );
};

export default ContactUs;
