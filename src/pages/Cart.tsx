import { TrashIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../store";
import { cartActions, CartItem } from "../store/cart-slice";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const dispatch = useDispatch<AppDispatch>();

  const increment = (item: CartItem) => {
    dispatch(cartActions.incrementInCart({ id: item.id }));
  };

  const decrement = (item: CartItem) => {
    dispatch(cartActions.decrementInCart({ id: item.id }));
  };

  const removeFromCartHandler = (item: CartItem) => {
    dispatch(cartActions.removeFromCart(item));
  };

  return (
    <div className={classes.container}>
      {cartItems.length === 0 && (
        <div className={classes.wrapper}>
          <h1>No item in cart!</h1>
          <button>Go and shop more!</button>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className={classes.wrapper_cart}>
          <ul>
            {cartItems.map((item: CartItem) => {
              return (
                <div className={classes.item} key={item.id}>
                  <img src={item.img} alt={item.anchorText} width="100px" />
                  <div className={classes.desc}>
                    <h4>{item.title}</h4>
                    <Link to={`/product/` + item.id}>
                      <p>{item.anchorText}</p>
                    </Link>
                  </div>
                  <div className={classes.right}>
                    <div className={classes.cartcount}>
                      <button
                        className={classes.counter}
                        onClick={() => decrement(item)}
                        disabled={item.count <= 0}
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        className={classes.counter}
                        onClick={() => increment(item)}
                      >
                        +
                      </button>
                    </div>
                    <div className={classes.delete}>
                      <button
                        className={classes.removeBtn}
                        onClick={() => removeFromCartHandler(item)}
                      >
                        <TrashIcon className="icon" />
                      </button>
                    </div>
                    <div className={classes.price}>${item.price}</div>
                  </div>
                </div>
              );
            })}
          </ul>
          <div className={classes.cartout}>
            <span className={classes.total}>
              Total: ${totalPrice.toFixed(2)}
            </span>
            <button className={classes.checkout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
