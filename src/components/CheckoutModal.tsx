import classes from "./CheckoutModal.module.css";

const CheckoutModal = () => {
  return (
    <div className={classes.checkout_container}>
      <div className={classes.form_row}>
        <label htmlFor="name" className={classes.input_label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className={classes.input_text}
        />
      </div>

      <div className={classes.form_row}>
        <label htmlFor="credit" className={classes.input_label}>
          Credit Card
        </label>
        <input
          type="text"
          name="credit"
          id="credit"
          className={classes.input_text}
        />
      </div>

      <button className={classes.payment}>Pay Now</button>
    </div>
  );
};

export default CheckoutModal;
