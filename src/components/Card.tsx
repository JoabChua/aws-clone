import { Link } from "react-router-dom";

import classes from "./Card.module.css";

const Card: React.FC<{ detail: CardDetail }> = (props) => {
  return (
    <div className={classes.card}>
      <h4 className="title">{props.detail.title}</h4>
      <img
        className={classes.img}
        src={props.detail.img}
        alt={props.detail.title}
      />
      <Link className={classes.link} to="/product">
        {props.detail.anchorText}
      </Link>
    </div>
  );
};

export default Card;

export interface CardDetail {
  id: number;
  title: string;
  img: string;
  anchorText: string;
  desc: string;
  price: number;
}
