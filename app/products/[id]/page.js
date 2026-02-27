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
    <div style={{
      padding: "80px 60px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "60px"
    }}>
      <img
        src={product.image}
        style={{
          width: "100%",
          borderRadius: "20px",
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}
      />

      <div>
        <h1 style={{ marginBottom: "20px" }}>{product.name}</h1>
        <p style={{ color: "#666", marginBottom: "20px" }}>
          {product.description}
        </p>
        <h2 style={{ marginBottom: "30px", color: "#0E5B4A" }}>
          ৳ {product.price}
        </h2>

        <button className="btn-primary" onClick={addToCart}>
          Add To Cart
        </button>
      </div>
    </div>
  );
}