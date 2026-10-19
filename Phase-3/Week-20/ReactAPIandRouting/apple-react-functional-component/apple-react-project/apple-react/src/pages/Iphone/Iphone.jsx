// import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import "./Iphone.css"

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchIphones = async () => {
      try {
        // const response = await axios.get("http://localhost:3000/iphones");
        const response = await fetch("http://localhost:3000/iphones");

        if (!response.ok) {
          throw new Error("Failed to Fectch  iPhones ");
        }
        const data = await response.json();
        console.log(data);
        setProducts(data.products);
      } catch (error) {
        console.log("Error: unable to fecth!!", error);
      }
    };

    fetchIphones();
  }, []);
  // empty depedency  array to ensures this only once the componnent renders or mounts

  console.log(products);

  return (
    <section className="internal-page-wrapper">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 mt-5 pt-5">
            <h1 className="font-weight-bold">Iphones</h1>
            <div className="brief-description mb-5">
              The best for the brightest.
            </div>
          </div>
        </div>

        {products?.map((product, index) => {
          let productDiv = (
            <div
              key={product.product_url}
              className="row justify-content-center text-center product-holder h-100"
            >
              <div
                className={`col-sm-12 col-md-6 my-auto order-${
                  index % 2 === 0 ? "1" : "2"
                }`}
              >
                <div className="product-title">{product.product_name}</div>

                <div className="product-brief">
                  {product.product_description}
                </div>

                <div className="starting-price">
                  {`Starting at ${product.starting_price}`}
                </div>

                <div className="monthly-price">{product.price_range}</div>

                <div className="links-wrapper">
                  <ul>
                    <Link to={`/iphone/${product.product_id}`}>Learn more</Link>
                  </ul>
                </div>
              </div>

              <div
                className={`col-sm-12 col-md-6 order-${
                  index % 2 === 0 ? "2" : "1"
                }`}
              >
                <div className="product-image">
                  <img src={product.product_img} alt="product" />
                </div>
              </div>
            </div>
          );

          return productDiv;
        })}
      </div>
    </section>
  );
};

export default Iphone;
