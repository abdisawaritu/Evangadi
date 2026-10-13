const ProductCard = ({ product }) => {
  const { title, price, catergory, brand } = product;
  
  return (
    <div>
      <h4>Product:{title} </h4>
      <h1>Price:{price}</h1>
      <h1>catergory:{catergory}</h1>
      <h1>brand:{brand} </h1>
    </div>
  );
};

export default ProductCard;
