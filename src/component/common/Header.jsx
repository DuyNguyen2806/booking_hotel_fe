import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      {/* <div className="overlay"></div> */}
      <div className="container">
        <h1 className="header-title text-center">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
