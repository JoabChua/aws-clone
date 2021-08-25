import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.v_col}>
          <div className={classes.col_header}>Get to Know Us</div>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Release</li>
          </ul>
        </div>
        <div className={classes.v_col}>
          <div className={classes.col_header}>Connect with Us</div>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div className={classes.v_col}>
          <div className={classes.col_header}>Make Money with Us</div>
          <ul>
            <li>Advertise your products</li>
            <li>Sell on Reactzon</li>
            <li>Associates Programme</li>
            <li>Fulfillment By Reactzon</li>
          </ul>
        </div>
        <div className={classes.v_col}>
          <div className={classes.col_header}>Let Us Help You</div>
          <ul>
            <li>COVID-19 and Reactzon</li>
            <li>Your Account</li>
            <li>Your Orders</li>
            <li>Delivery Rates & Policies</li>
            <li>Returns & Refunds</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <hr className={classes.hline} />
      <div className={classes.logo}>React-JWS</div>
      <div className={classes.countries}>
        <ul>
          <li>Australia</li>
          <li>Brazil</li>
          <li>Canada</li>
          <li>China</li>
          <li>France</li>
          <li>Germany</li>
          <li>India</li>
          <li>Italy</li>
          <li>Japan</li>
          <li>Mexico</li>
          <li>Netherlands</li>
          <li>Poland</li>
          <li>Spain</li>
          <li>Turkey</li>
          <li>United Arab Emirates</li>
          <li>United Kingdom</li>
          <li>United States</li>
        </ul>
      </div>

      <div className={classes.others}>
        <div className={classes.container}>
          <div className={classes.v_col}>
            <div className={classes.col_header}>Reactzon Web Services</div>
            <ul>
              <li>Scalable Cloud</li>
              <li>Computing Services</li>
            </ul>
          </div>
          <div className={classes.v_col}>
            <div className={classes.col_header}>Reactzon Fresh</div>
            <ul>
              <li>Groceries & More</li>
              <li>Right to your door</li>
            </ul>
          </div>
          <div className={classes.v_col}>
            <div className={classes.col_header}>Goodreads</div>
            <ul>
              <li>Book Reviews</li>
              <li>Recommendations</li>
            </ul>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.v_col}>
            <div className={classes.col_header}>Shop Blog & Videos Editing</div>
            <ul>
              <li>Designer Style & More</li>
              <li>Fashion Brands</li>
            </ul>
          </div>
          <div className={classes.v_col}>
            <div className={classes.col_header}>JoBooks</div>
            <ul>
              <li>Kids Zone</li>
              <li>Productivity books</li>
            </ul>
          </div>
          <div className={classes.v_col}>
            <div className={classes.col_header}>Alexa</div>
            <ul>
              <li>Actionable Analytics</li>
              <li>Apps control</li>
            </ul>
          </div>
        </div>
        <div className={classes.container}>
          <div className={classes.v_col}>
            <div className={classes.col_header}>Book Depository</div>
            <ul>
              <li>Free books</li>
              <li>Delivery Worldwide</li>
            </ul>
          </div>
          <div className={classes.v_col}>
            <div className={classes.col_header}>IMDb</div>
            <ul>
              <li>Movies & TV</li>
              <li>Celebrities</li>
            </ul>
          </div>
          <div className={classes.v_col}>
            <div className={classes.col_header}>DPReview</div>
            <ul>
              <li>Digital</li>
              <li>Photography</li>
            </ul>
          </div>
        </div>

        <div className={classes.footnote}>
          <ul>
            <li>Coniditons of Use</li>
            <li>Privacy Notice</li>
            <li>Interest-Based Ads</li>
            <li>Copyright 2020-2021, Reactzon, JWS or its affiliates</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
