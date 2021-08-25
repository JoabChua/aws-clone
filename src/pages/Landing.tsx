import Banner from "../components/Banner";
import Card, { CardDetail } from "../components/Card";

import "../App.css";
import CarouselCard from "../components/CarouselCard";
import classes from "./Landing.module.css";
import { CAROUSELITEMS, DIGITAL, ESSENTIAL } from "../data/dummy";

const cards: CardDetail[] = CAROUSELITEMS;
const essential = ESSENTIAL;
const digital = DIGITAL;

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
