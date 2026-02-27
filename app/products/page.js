import { products } from "../../data/products";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div style={{ padding: "80px 60px" }}>
      <h1 style={{ marginBottom: "40px" }}>Shop Collection</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))",
        gap: "40px"
      }}>
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="product-card">
              <img src={product.image} alt={product.name} />
              <div className="product-content">
                <div className="product-title">{product.name}</div>
                <div className="product-price">
                  ৳ {product.price}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}