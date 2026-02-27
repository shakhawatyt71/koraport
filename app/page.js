import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{
      padding: "120px 60px",
      textAlign: "center",
      background: "linear-gradient(135deg, #F5F7F6, #E0F1EC)"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Wear What Feels Real
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "40px", color: "#555" }}>
        Crafted for bold simplicity.
      </p>

      <Link href="/products" className="btn-primary">
        Explore Collection
      </Link>
    </div>
  );
}