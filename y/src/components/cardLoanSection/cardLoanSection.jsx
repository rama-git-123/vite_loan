import "./cardLoanSection.scss";
const CardLoanSection = ({ mainData }) => {
  return (
    <>
      <h2 className="margin-t-2 h2-font">We Facilitate</h2>
      <p className="title-txt">
        Wide Range of Financial Products That suits your customer's needs!
      </p>
      <div className="card-loan-section">
        <div className="row">
          {mainData?.loanItems?.map((item, index) => (
            <div className="col-sm-3" key={index}>
              <div className="card loan-card">
                <div className="card-body">
                  <h5 className="card-title">
                    {item.title}
                    <i
                      className={`bi ${item.icon}`}
                      style={{ marginLeft: "20px", color: "#ff403f" }}
                    ></i>
                  </h5>
                  <p className="card-text">{item.description}</p>
                  <a href="#" className="check-link">
                    {item.link}
                    <i
                      className={`bi-arrow-right`}
                      style={{ marginLeft: "20px", color: "#ff403f" }}
                    ></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CardLoanSection;
