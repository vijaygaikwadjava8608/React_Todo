import React from "react";
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return (
    <div>
      <h1>This is product Page</h1>
      <h3>You are looking for product : {id}</h3>
    </div>
  );
}

export default Product;
