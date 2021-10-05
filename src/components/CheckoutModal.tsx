import React, { useState } from "react";
import classes from "./CheckoutModal.module.css";

const CheckoutModal: React.FC<{
  onPaying: (ev: { email: string; credit: string }) => void;
  onCloseModal: () => void;
}> = (props) => {
  const [email, setEmail] = useState("");
  const [credit, setCredit] = useState("");

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const creditHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredit(event.target.value);
  };

  return (
    <div className={classes.checkout_container}>
      <div className={classes.checkout_wrapper}>
        <div className={classes.form_row}>
          <label htmlFor="name" className={classes.input_label}>
            Email
          </label>
          <input
            type="email"
            name="name"
            id="name"
            value={email}
            onChange={emailHandler}
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
            value={credit}
            onChange={creditHandler}
            className={classes.input_text}
          />
        </div>

        <div className={classes.btngroup}>
          <button
            className={`${classes.payment} + ${
              email && credit ? "" : classes.disabled
            }`}
            onClick={() => props.onPaying({ email, credit })}
            disabled={!credit && !email}
          >
            Pay Now
          </button>
          <button className={classes.close} onClick={props.onCloseModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
