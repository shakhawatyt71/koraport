import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ padding: "80px 40px", textAlign: "center" }}>
      <h1>Redefine Your Style</h1>
      <p>Minimal. Comfortable. Bold simplicity.</p>

      <Link
        href="/products"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 25px",
          background: "#0E5B4A",
          color: "white",
          textDecoration: "none",
          borderRadius: "6px"
        }}
      >
        Shop Now
      </Link>
    </div>
  );
}