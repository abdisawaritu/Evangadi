import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("https://dummyjson.com/products?limit=5");

        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p role="alert">Error: {error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
        </article>
      ))}
    </div>
  );
}

export default ProductList;
