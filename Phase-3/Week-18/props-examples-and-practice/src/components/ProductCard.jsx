const ProductCard = ({ product }) => {
  const { title, price, catergory, brand } = product;
  return (
    <div>
      <h1>{title} </h1>
      <h1>{price}</h1>
      <h1>{catergory}</h1>
      <h1>{brand} </h1>
    </div>
  );
};

export default ProductCard;
