import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Banner.module.css";
import a1 from "../assets/banner/a1.jpg";
import a2 from "../assets/banner/a2.jpg";
import a3 from "../assets/banner/a3.jpg";
import a4 from "../assets/banner/a4.jpg";

const assets = [a1, a2, a3, a4];

const Banner = () => {
  return (
    <div className={classes.wrapper}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={5000}
      >
        {assets.map((pic: string) => {
          return (
            <div key={pic}>
              <img src={pic} alt={pic} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
