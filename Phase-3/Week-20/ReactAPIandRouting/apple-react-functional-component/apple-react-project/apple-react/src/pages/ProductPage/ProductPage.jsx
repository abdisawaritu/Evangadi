import { useEffect, useState } from "react";

import { useParams } from "react-router";

import NotFound from "../NotFound/NotFound";

function ProductPage() {
  const [product, setProduct] = useState([]);
  console.log(useParams());
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/iphones/${id}`);
        const data = await res.json();
        console.log(data.products);
        console.log("APi Response" , data)
        console.log("Product data")
        setProduct(data.products);
      } catch (error) {
        setProduct([error]);
      }
    };

    fetchData();
  }, [id]);

  if (product.length > 0) {
    return (
      <section className="internal-page-wrapper">
        <div className="container">
          {product.map((product) => {
            return (
              <div key={product.product_id}>
                <div className="row justify-content-center text-center">
                  <div className="col-12 mt-5 pt-5">
                    <div className="title-wraper font-weight-bold">
                      {product.product_name}
                    </div>

                    <div className="brief-description">
                      {product.product_brief_description}
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center text-center product-holder h-100 m-5">
                  <div className="col-sm-12 col-md-6 my-auto">
                    <div className="starting-price">
                      Starting at {product.starting_price}
                    </div>

                    <div className="monthly-price">{product.price_range}</div>

                    <div className="product-details">
                      {product.product_description}
                    </div>
                  </div>

                  <div className="col-sm-12 col-md-6">
                    <div className="product-image">
                      <img src={product.product_img} alt="product" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return <NotFound />;
  }
}

export default ProductPage;
