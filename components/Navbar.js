"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const stored = localStorage.getItem("kp_cart");
    if (stored) {
      const items = JSON.parse(stored);
      setCount(items.length);
    }
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">KORA PORT</div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/products">Shop</Link>
        <Link href="/cart">Cart ({count})</Link>
      </div>
    </nav>
  );
}