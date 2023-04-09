import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartStyle = {
    background: "#F59E0D",
    display: "flex",
    padding: "2px 10px",
    borderRadius: "30px",
  };
  return (
    <>
      <nav
        className="container flex items-center justify-between py-4 px-6 "
        id="navbarid"
      >
        <Link to="/" style={{ marginLeft: 30 }}>
          <img src="/images/Pizza Logo.png" alt="pizzalogo" width={75}></img>
        </Link>
        <ul className="flex items center">
          <li>
            {" "}
            <Link to="/" id="home">Home</Link>
          </li>
          <li className="ml-6">
            <Link to="/products">Products</Link>
          </li>
          <li className="ml-6">
            <Link to="/cart">
              <div style={cartStyle}>
                <span>0</span>
                <img
                  className="ml-2"
                  src="/images/Pizza-delivery-.jpg"
                  alt="cart-icon"
                  width={25}
                ></img>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
