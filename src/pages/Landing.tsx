import Banner from "../components/Banner";
import Card, { CardDetail } from "../components/Card";

import "../App.css";
import c1 from "../assets/card/c1.jpg";
import c2 from "../assets/card/c2.jpg";
import c3 from "../assets/card/c3.jpg";
import c4 from "../assets/card/c4.jpg";
import b1 from "../assets/card/b1.jpg";
import b2 from "../assets/card/b2.jpg";
import b3 from "../assets/card/b3.jpg";
import b4 from "../assets/card/b4.jpg";
import b5 from "../assets/card/b5.jpg";
import d1 from "../assets/card/d1.jpg";
import d2 from "../assets/card/d2.jpg";
import d3 from "../assets/card/d3.jpg";
import d4 from "../assets/card/d4.jpg";
import d5 from "../assets/card/d5.jpg";
import CarouselCard from "../components/CarouselCard";
import classes from "./Landing.module.css";

const cards: CardDetail[] = [
  {
    title: "Free delivery on your first order.",
    img: c1,
    anchorText: "Learn more",
    id: 1,
  },
  {
    title: "National Day Sale | Deals up to 30% off.",
    img: c2,
    anchorText: "Shop now",
    id: 2,
  },
  {
    title: "Today's Top Deal.",
    img: c3,
    anchorText: "Shop more deals",
    id: 3,
  },
  {
    title: "Delivering with smiles",
    img: c4,
    anchorText: "Learn more",
    id: 4,
  },
];

const essential = [d1, d2, d3, d4, d5, d1, d2, d3, d4, d5];
const digital = [b1, b2, b3, b4, b5, b1, b2, b3, b4, b5];

const Landing = () => {
  return (
    <div className={classes.landing}>
      <Banner />
      <div className={classes.overlay}>
        <section className={classes.section}>
          <h2 className="flex-center">Explore deals</h2>
          <div className={`flex-center ${classes.card_overflow}`}>
            {cards.map((card) => {
              return <Card key={card.id} detail={card} />;
            })}
          </div>
        </section>
        <section className={classes.section}>
          <CarouselCard header="Best sellers in town" essential={essential} />
        </section>
        <section className={classes.section}>
          <h2 className="flex-center">Browse By Category</h2>
          <div className={`flex-center ${classes.card_overflow}`}>
            {cards.map((card) => {
              return <Card key={card.id} detail={card} />;
            })}
          </div>
        </section>
        <section className={classes.section}>
          <CarouselCard
            header="Best sellers in Electronic"
            essential={digital}
          />
        </section>
        <section className={classes.section}>
          <CarouselCard
            header="Explore everyday essentials"
            essential={essential}
          />
        </section>
      </div>
    </div>
  );
};

export default Landing;
