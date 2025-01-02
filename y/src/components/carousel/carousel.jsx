import "./carousel.scss";
const Carousel = () => {
  return (
    <div className="banner-container">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 banner-text">
                <h2>FREE CIBIL SCORE CHECK IS NOW LIVE</h2>
                <p>
                  Check your CIBIL Score & detailed credit report Instantly!
                </p>
              </div>
              <div className="col-sm-6">
                <div className="carousel-item active">
                  <img
                    src="https://ruloans-bucket.s3.ap-south-1.amazonaws.com/crm_components_meta/crm_components_meta_crm_components_meta_GCfI5nQG74ZASM8FNhyVm93ASDWuuLZJ.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item ">
                  <img
                    src="https://ruloans-bucket.s3.ap-south-1.amazonaws.com/crm_components_meta/crm_components_meta_crm_components_meta_Lj03TPpNnywCu2Uz8m2VzIffsTG4NZoo.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="..." className="d-block w-100" alt="..." />
      </div> */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Carousel;
