import { useState } from "react";
import { useParams } from "react-router";
import { CardDetail } from "../components/Card";
import { CAROUSELITEMS } from "../data/dummy";
import classes from "./ProductDetail.module.css";

const items = [...CAROUSELITEMS];

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [count, setCount] = useState(0);

  const item = items.find(
    (prod) => prod.id.toString() === productId,
  ) as CardDetail;
  console.log(item);

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
          <button className={classes.cart}>Add to Cart</button>
          <div className={classes.amount}>
            <button
              className={classes.counter}
              onClick={decrement}
              disabled={count <= 0}
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
