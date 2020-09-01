import React from "react";
import "./Header.css";
import logo from "../../assets/img/facebook.png";
import {
  Search,
  Home,
  Flag,
  StorefrontOutlined,
  SupervisedUserCircle,
  SubscriptionsOutlined,
  Add,
  Forum,
  NotificationsActive,
  ExpandMore,
} from "@material-ui/icons";
import { Avatar, IconButton } from "@material-ui/core";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <div className="header__input">
          <Search />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <Home fontSize="large" />
        </div>
        <div className="header__option">
          <Flag fontSize="large" />
        </div>
        <div className="header__option">
          <SubscriptionsOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlined fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircle fontSize="large" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Sammiee</h4>
        </div>
        <IconButton>
          <Add></Add>
        </IconButton>
        <IconButton>
          <Forum></Forum>
        </IconButton>
        <IconButton>
          <NotificationsActive></NotificationsActive>
        </IconButton>
        <IconButton>
          <ExpandMore></ExpandMore>
        </IconButton>
      </div>
    </div>
  );
}
