import { products } from "../../data/products";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div style={{ padding: "60px 40px" }}>
      <h1>Shop All</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px,1fr))",
        gap: "30px",
        marginTop: "30px"
      }}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            style={{
              textDecoration: "none",
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              color: "black"
            }}
          >
            <img src={product.image} width="100%" />
            <h3>{product.name}</h3>
            <p>{product.price} BDT</p>
          </Link>
        ))}
      </div>
    </div>
  );
}