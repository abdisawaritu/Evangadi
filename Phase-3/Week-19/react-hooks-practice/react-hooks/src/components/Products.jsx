import useFetch from "./hooks/useFetch";

function Products() {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products?limit=5",
  );

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p role="alert">Error: {error}</p>;
  }

  return (
    <div>
      <h1>Products</h1>

      {data.products.map((product) => (
        <article key={product.id}>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
        </article>
      ))}
    </div>
  );
}

export default Products;
