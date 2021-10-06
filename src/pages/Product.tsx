import { ChevronDoubleRightIcon, StarIcon } from "@heroicons/react/solid";
import { StarIcon as Star } from "@heroicons/react/outline";
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
        {filters.map((item, index) => {
          return (
            <div key={index} className={classes.filter}>
              <input type="checkbox" name={item} value={item} />
              <label htmlFor="price">{item}</label>
            </div>
          );
        })}
      </div>
      <div className={classes.right}>
        <div className={classes.list}>
          {items.map((item, index) => {
            return (
              <div className={classes.item} key={index}>
                <img src={item.img} alt={item.anchorText} width="200px" />

                <div className={classes.info}>
                  <h4 className={classes.title}>{item.title}</h4>
                  <h4 className={classes.rating}>
                    4.0 / 5.0 - 200 Ratings
                    <div className={classes.stars}>
                      <StarIcon className={classes.icon} />
                      <StarIcon className={classes.icon} />
                      <StarIcon className={classes.icon} />
                      <StarIcon className={classes.icon} />
                      <Star className={classes.outline} />
                    </div>
                  </h4>
                  <h4>${item.price}</h4>
                </div>
                <Link to={`/product/` + item.id} className={classes.more}>
                  <ChevronDoubleRightIcon />
                  <p>View</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
