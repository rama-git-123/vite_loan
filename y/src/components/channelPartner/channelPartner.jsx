import "./channelPartner.scss";
import partnerImage from "../../assets/images/partner-image.png";
const ChannelPartner = ({ mainData }) => {
  return (
    <div className="channelPartner">
      <h2 className="margin-t-2 h2-font">{mainData?.chhanelPatner?.title}</h2>
      <div className="row">
        <div className="col-md-9">
          <p>{mainData?.chhanelPatner?.description}</p>
          <ul>
            {mainData?.chhanelPatner?.items?.map((item, index) => (
              <>
                <li key={index}>
                  <i class="bi bi-arrow-right-circle"></i>
                  {item.text}
                </li>
              </>
            ))}
          </ul>
        </div>
        <div className="col-md-3">
          <img src={partnerImage} />
        </div>
      </div>
    </div>
  );
};
export default ChannelPartner;
