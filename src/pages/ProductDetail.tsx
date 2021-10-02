import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { CardDetail } from "../components/Card";
import { CAROUSELITEMS } from "../data/dummy";
import { AppDispatch, RootState } from "../store";
import { cartActions } from "../store/cart-slice";
import classes from "./ProductDetail.module.css";

const items = [...CAROUSELITEMS];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [count, setCount] = useState(1);

  const history = useHistory();

  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  const addToCartHandler = () => {
    if (isLoggedIn) {
      dispatch(cartActions.addToCart({ ...item, count }));
    } else {
      toast.remove();
      toast.error("Please login first.", {
        position: "bottom-right",
        duration: 3000,
      });
      history.push("/auth");
    }
  };

  const item = items.find(
    (prod) => prod.id.toString() === productId,
  ) as CardDetail;

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className={classes.container}>
      <div className={classes.item} key={item.id}>
        <img src={item.img} alt={item.anchorText} width="200px" />
        <div className={classes.desc}>
          <h4>{item.desc}</h4>
          <button className={classes.cart} onClick={addToCartHandler}>
            Add to Cart
          </button>
          <div className={classes.amount}>
            <button
              className={classes.counter}
              onClick={decrement}
              disabled={count <= 1}
            >
              -
            </button>
            <span>{count}</span>
            <button className={classes.counter} onClick={increment}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
