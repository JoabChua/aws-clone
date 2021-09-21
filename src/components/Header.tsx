import { NavLink } from "react-router-dom";
import {
  ShoppingCartIcon,
  LogoutIcon,
  LoginIcon,
  ShoppingBagIcon,
  MenuIcon,
  AcademicCapIcon,
} from "@heroicons/react/solid";

import classes from "./Header.module.css";
import "../App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { authActions } from "../store/auth-slice";

const Header: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const cartCount = useSelector((state: RootState) => state.cart.cartCount);

  const dispatch = useDispatch<AppDispatch>();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <React.Fragment>
      <div className={classes.header}>
        <div className={classes.logo}>
          <NavLink to="/">
            <ShoppingBagIcon className="icon" />
            React-JWS
          </NavLink>
        </div>
        <div className={classes.input_wrapper}>
          <input type="text" placeholder="Search for your favourite product." />
        </div>
        <div className={classes.right}>
          <ul>
            {isLoggedIn && (
              <li>
                <NavLink to="/cart" activeClassName={classes.active}>
                  <div className={classes.cart}>
                    <ShoppingCartIcon className="icon" />
                    <span className={classes.count}>{cartCount}</span>
                  </div>
                  Cart
                </NavLink>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <NavLink to="/auth" activeClassName={classes.active}>
                  <LoginIcon className="icon" />
                  Login
                </NavLink>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <NavLink to="/" onClick={logoutHandler}>
                  <LogoutIcon className="icon" />
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={classes.subheader}>
        <div className={classes.left}>
          <ul>
            <li>
              <MenuIcon className="icon" />
              All
            </li>
            <li>Best Sellers</li>
            <li>Customer Service</li>
            <li>New Releases</li>
            <li>Computer</li>
          </ul>
        </div>
        <div className={classes.right}>
          <AcademicCapIcon className="icon" />
          React Prime
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
