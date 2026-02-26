"use client";

import Link from "next/link";

export default function ProductCard({ product }: any) {
  return (
    <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
      <div style={{
        background: "white",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        transition: "0.3s"
      }}>
        <img src={product.image} alt={product.name} width="100%" />

        <div style={{ padding: "20px" }}>
          <h3 style={{ marginBottom: "10px" }}>{product.name}</h3>
          <p style={{ color: "#777", fontSize: "14px" }}>
            {product.description}
          </p>
          <p style={{ marginTop: "15px", fontWeight: "600" }}>
            {product.price} BDT
          </p>
        </div>
      </div>
    </Link>
  );
}
