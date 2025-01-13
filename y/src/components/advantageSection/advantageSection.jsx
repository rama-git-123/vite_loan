import "./advantageSection.scss";
import AdvantageImage from "../../assets/images/advantage.jpg";
const AdvantageSection = ({ mainData }) => {
  return (
    <div className="advantage-section">
      <h2>Advantages of Daitapati Finance</h2>
      <div className="row">
        <div className="col-md-5">
          <img src={AdvantageImage} />
        </div>
        <div className="col-md-7">
          <ul>
            {mainData?.advantage?.map((item, index) => (
              <li className="advantage-item" key={index}>
                <i class={`bi bi-record2`}></i>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdvantageSection;
