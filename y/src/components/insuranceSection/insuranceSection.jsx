import "./insuranceSection.scss";
import healthImage from "../../assets/images/health.webp";
import healthImage1 from "../../assets/images/lifeinsurance.webp";
import healthImage2 from "../../assets/images/general-insurance-service.jpg";
const InsuranceSection = ({ mainData }) => {
  // const imagesLocal = () =>{
  //   if ()
  // }
  return (
    <div className="insurance-section">
      <h3>Insurance</h3>
      <p>Wide Range of Insurance Products</p>
      <div className="row">
        {mainData?.insuranceItems?.map((item, index) => (
          <div className="col-sm-4" key={index}>
            <div className="card insurance-card">
              <img
                src={item.image}
                class="card-img-top"
                alt="..."
                style={{ height: "250px", width: "auto" }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {item.title}
                  <i
                    className={`bi ${item.icon}`}
                    style={{ marginLeft: "20px", color: "#2167fb" }}
                  ></i>
                </h5>
                <p className="card-text">{item.description}</p>
                <a
                  href="#"
                  className="btn btn-outline-primary btn-sm stretched-link"
                >
                  {item.link}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default InsuranceSection;
