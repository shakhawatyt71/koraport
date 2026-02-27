"use client";

import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useParams } from "next/navigation";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) return <div style={{ padding: 40 }}>Product not found</div>;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "view_item",
    item_id: product.id,
    item_name: product.name,
    value: product.price
  });

  return (
    <div style={{ padding: "60px 40px" }}>
      <img src={product.image} width="300" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h3>{product.price} BDT</h3>

      <button
        onClick={() => addToCart(product)}
        style={{
          padding: "12px 20px",
          background: "#0E5B4A",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
