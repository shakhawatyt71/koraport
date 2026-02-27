"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("kp_cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
    localStorage.setItem("kp_cart", JSON.stringify(updated));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: "60px 40px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item, index) => (
        <div key={index} style={{ marginBottom: 20 }}>
          <h3>{item.name}</h3>
          <p>{item.price} BDT</p>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <h2>Total: {total} BDT</h2>
    </div>
  );
}