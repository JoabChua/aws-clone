import classes from "./Cart.module.css";

const Cart = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>No item in cart!</h1>
        <button>Go and shop more!</button>
      </div>
    </div>
  );
};

export default Cart;
