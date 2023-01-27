import React from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Navbar.scss";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
          </div>
          <div className="item">
            <span></span>
          </div>
          <div className="left">
            <Link className ="link" to="/home">Bizz3</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Find a color</Link>
          </div>
          <div className="item">
            <a className ="link" href="/products"> Products </a>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Get Support</Link>
          </div>
        </div>
        {/* <div className="center">
          <Link className ="link" to="/">BIZZ3</Link>
        </div> */}
        <div className="right">
          <div className="item">
            <Link className ="link" to="/home">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          {/* <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div> */}
          <div className="icons">
            <SearchOutlinedIcon/>
            <Link to="/login">
            <Person2OutlinedIcon/>
            </Link>
            <FavoriteBorderIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;