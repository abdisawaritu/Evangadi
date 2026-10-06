import { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.css";
import { products } from "../../constants/data.js";

class Products extends Component {
  render() {
    // console.log(products)

    // let products  = null   we use optional chaning to be safe  ?

    return (
      <div className="contanier">
        {products?.map((product , index) => {
          //   console.log(product);
          const {id ,  color, title, price, imgLink, description , text } = product;
          return (
            <ProductCard
              key =  {id}
            //   key = {index}
              color={color}
              title={title}
              imgLink= {imgLink}
              price = {price}
              description= {description}
            //   text = {text}
            //   text = {index ===5   &&  "this is sample text for the  the product card uniquess"}
            text = {text}

            // text = "this is the text for the whole product card"
            />
          );
        })}

        {/* We have make th above component to reuse with differnt  the data by changing thier content according to the product card  rather than doing this we have to do other   what is we use th earray method map to to send the data  to the   child components  */}
      </div>
    );
  }
}

export default Products;
