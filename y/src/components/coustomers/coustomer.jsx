import "./coustomer.scss";
import costomerImage3 from "../../assets/images/3.webp";
import costomerImage5 from "../../assets/images/5.webp";
import costomerImage6 from "../../assets/images/6.webp";
import costomerImage7 from "../../assets/images/7.webp";
const Coustomer = () => {
  return (
    // <div className="coustomer">
    //   <h2 className="h2-font margit-t-1">
    //     Get Loans for your customers from India’s Top-Tier Lenders
    //   </h2>
    // </div>

    <div className="coustomer">
      <h2 className="margin-t-5 margin-b-3">
        Get Loans for your customers from India’s Top-Tier Lenders
      </h2>
      <div className="row">
        <div className="col-md-12 coustomer-item">
          <ul>
            <li>
              <img src={costomerImage3} width="190" />
            </li>
            <li>
              <img src={costomerImage5} width="190" />
            </li>
            <li>
              <img src={costomerImage6} width="190" />
            </li>
            <li>
              <img src={costomerImage7} width="190" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Coustomer;
