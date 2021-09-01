import React from "react";
import ImageHelper from "./helper/ImageHelper";

const Card = ({ product }) => {
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">Summer Collection</div>
      <div className="card-body">
        <ImageHelper product={product} />
        <p className="lead bg-success font-weight-normal text-wrap">
          A Classic T-Shirt
        </p>
        <p className="btn btn-success rounded  btn-sm px-4">$ 10</p>
        <div className="row">
          <div className="col-12">
            <button
              onClick={() => {}}
              className="btn btn-block btn-outline-success mt-2 mb-2"
            >
              Add to Cart
            </button>
          </div>
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
