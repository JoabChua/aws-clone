import { Link } from "react-router-dom";
import { CAROUSELITEMS, FILTERS } from "../data/dummy";
import classes from "./Product.module.css";

const filters = FILTERS;

const items = [
  ...CAROUSELITEMS,
  ...CAROUSELITEMS,
  ...CAROUSELITEMS,
  ...CAROUSELITEMS,
];

const Product = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        {filters.map((item) => {
          return (
            <div key={item} className={classes.filter}>
              <input type="checkbox" name={item} value={item} />
              <label htmlFor="price">{item}</label>
            </div>
          );
        })}
      </div>
      <div className={classes.right}>
        <div className={classes.list}>
          {items.map((item) => {
            return (
              <div className={classes.item} key={item.id}>
                <img src={item.img} alt={item.anchorText} width="200px" />
                <div className={classes.desc}>
                  <h4>{item.title}</h4>
                  <Link to="/product/:id">
                    <p>{item.anchorText}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
