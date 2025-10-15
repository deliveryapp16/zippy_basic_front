"use client";
import { useParams } from "next/navigation";

import React from "react";

const ProductDetail = () => {
  const params = useParams();
  return (
    <div>
      <p>Product Detail Page - Product ID: {params.product_id}</p>
    </div>
  );
};

export default ProductDetail;
