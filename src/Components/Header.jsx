import React from "react";

function Header() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src={
            "https://images.deliveryhero.io/image/talabat/restaurants/WhatsApp_Image_20230607_a638217270232726204.jpeg?width=300"
          }
          alt="Joy Restaurant"
        />
      </div>
      <div className="navbar-right">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>Cart</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
