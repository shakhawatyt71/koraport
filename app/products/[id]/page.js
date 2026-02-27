"use client";

import { useParams } from "next/navigation";
import { products } from "../../../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div style={{ padding: 40 }}>Not found</div>;

  const addToCart = () => {
    const stored = localStorage.getItem("kp_cart");
    let cart = stored ? JSON.parse(stored) : [];

    cart.push(product);
    localStorage.setItem("kp_cart", JSON.stringify(cart));

    alert("Added to cart");
  };

  return (
    <div style={{ padding: "60px 40px" }}>
      <img src={product.image} width="300" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>{product.price} BDT</h3>

      <button
        onClick={addToCart}
        style={{
          padding: "12px 20px",
          background: "#0E5B4A",
          color: "white",
          border: "none",
          borderRadius: "6px",
          marginTop: "20px"
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}