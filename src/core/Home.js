import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";

export default function Home() {
  return (
    <Base title="Home Page" description="Welcome to the Tshirt Store">
      <div className="row text-center">
        <div className="col-1"></div>
        <div className="col-3">
          <Card />
        </div>
        <div className="col-4">
          <button className="btn btn-success">
            <Card />
          </button>
        </div>
        <div className="col-4">
          <button className="btn btn-success">
            <Card />
          </button>
        </div>
      </div>
    </Base>
  );
}
