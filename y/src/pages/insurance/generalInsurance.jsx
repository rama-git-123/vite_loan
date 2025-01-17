import Breadcrumb from "../../components/breadcrumb/breadcrumb";
import { Link, useLocation } from "react-router-dom";
const GeneralInsuarance = () => {
  const location = useLocation();
  return (
    <div className="all-insurance-container margin-t-2">
      <Breadcrumb
        location={location}
        page={"General Insurance"}
        //subPage={"All Insurance"}
      />
    </div>
  );
};
export default GeneralInsuarance;
