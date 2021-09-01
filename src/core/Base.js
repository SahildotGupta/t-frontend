import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My Desciption",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className="container-fluid">
        <div className="jumbotrom bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}> {children}</div>
      </div>
      <footer className="footer bg-dark mt-auto py-3 mb-0">
        <div className="container-fluid bg-light text-dark text-center mb-0">
          <p>Copyright © 2021 - T-Warehouse</p>
        </div>
      </footer>
    </div>
  );
};

export default Base;
