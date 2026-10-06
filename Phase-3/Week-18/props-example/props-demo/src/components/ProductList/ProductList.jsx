function ProductList() {
  return (
    <>
      <div className="contanier">
        {/* product 1 */}

        <div className="product-card">
          <div className="card-header  green-header">
            <h2 className="product-title"> The let them theory</h2>
          </div>

          {/* product-image */}
          <div className="product-image">
            <img
              src="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg"
              alt="The let  them  Theory"
            />
          </div>

          {/* product price and description  */}

          <div className="product-content">
            <h3 className="Product-price">$12.99</h3>
            <p className="product-description">
              If you've ever felt stuch , overwhelmed , or frustrated with where
              you are , the problem isn't you. The problem is the power you give
              to oher people. two simple words-let them-will set you free. free
              from the opinions, drame , and judgements of others. free from the
              exhausting cycle of trying to manage everything and everyone
              around you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
