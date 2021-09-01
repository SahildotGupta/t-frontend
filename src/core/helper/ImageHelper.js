import React from "react";
import { API } from "../../backend";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwVdF-llSR6YxRDkpNbeuSAJ4kzmn2Msl1Ww&usqp=CAU`;
  return (
    <div className="rounded border border-success p-2">
      <img
        src={imageurl}
        alt="photo"
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        className="mb-100 rounded"
      />
    </div>
  );
};

export default ImageHelper;
