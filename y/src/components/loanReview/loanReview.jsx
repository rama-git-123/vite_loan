import "../loanReview/loanReview.scss";
const LoanReview = ({ title }) => {
  return (
    <div class="container">
      <h2 class="text-center margin-t-2 margin-b-2">{title}</h2>

      <div class="review-container">
        <div class="review-card">
          <div class="star-rating">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p>
            During the COVID-19 times, I was in urgent need of some funds for
            the treatment of my brother and I was not able to get it from
            anywhere. Even the bank I have my salary account refused to provide
            me a personal loan, then my friend told me about RULOANS and after
            contacting them, I was able to get a personal loan in a span of
            three days from standard chartered bank.
          </p>
          <div class="author-info">
            <h4>NEELIMANI PRADHAN</h4>
          </div>
        </div>

        <div class="review-card">
          <div class="star-rating">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p>
            RULOANS helped me in getting a personal loan for my wedding. I was
            pretty impressed by the rate of interest, terms and conditions they
            got me by negotiating from the bank. I can surely refer all of my
            colleagues to RULOANS for applying any type of loan.
          </p>
          <div class="author-info">
            <h4>SHEETANJALI MOHAPATRA</h4>
          </div>
        </div>

        <div class="review-card">
          <div class="star-rating">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p>
            I took a personal loan through RULOANS and used it to clear my
            credit card dues. This way I saved some money as the interest
            charged on my credit card was much higher than the personal loan.
          </p>
          <div class="author-info">
            <h4>RAJESH DASH</h4>
          </div>
        </div>

        <div class="review-card">
          <div class="star-rating">
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </div>
          <p>
            The comparison table, which RULOANS have provided on their website,
            is best. As it is very useful for every loan seeker. Using that
            table i applied with YES bank as it suited best to my requirements.
          </p>
          <div class="author-info">
            <h4>PRIJESH SAHOO</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoanReview;
