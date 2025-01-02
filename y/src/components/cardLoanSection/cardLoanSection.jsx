import "./cardLoanSection.scss";
const CardLoanSection = ({ mainData }) => {
  return (
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
                    style={{ marginLeft: "20px", color: "#2167fb" }}
                  ></i>
                </h5>
                <p className="card-text">{item.description}</p>
                <a href="#" className="btn btn-primary btn-sm stretched-link">
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
export default CardLoanSection;
