import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import classes from "./CarouselCard.module.css";
import "../App.css";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 864 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  semi: {
    breakpoint: { max: 864, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CarouselCard: React.FC<{ header: string; essential: string[] }> = (
  props,
) => {
  return (
    <div className={classes.container}>
      <h2 className="flex-center">{props.header}</h2>
      <Carousel responsive={responsive} infinite={true}>
        {props.essential.map((pic: string) => {
          return (
            <div key={pic}>
              <Link className={classes.link} to="/product">
                <img src={pic} alt={pic} width="200" height="200" />
              </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
