import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { CardDetail } from "../components/Card";
import { CAROUSELITEMS } from "../data/dummy";
import { AppDispatch } from "../store";
import { cartActions } from "../store/cart-slice";
import classes from "./ProductDetail.module.css";

const items = [...CAROUSELITEMS];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [count, setCount] = useState(1);

  const dispatch = useDispatch<AppDispatch>();

  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ ...item, count }));
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
