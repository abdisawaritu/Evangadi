import { Component } from "react";
import "./ProductCard.css";

class ProductCard extends Component {
  render() {
    //  console.log(this.props)
    const { color, title, imgLink, price, description , text} = this.props;
    return (
      <>
        <div className="product-card">
          <div className={`card-header  $ {color}`}>
            <h2 className="product-title"> {title}</h2>
          </div>

          <div className="product-image">
            <img src={imgLink} alt={title} />
          </div>
          <div className="product-content">
            <h3 className="product-price"> {price} </h3>
            <p className="product-description">{description} </p>
            {text && <p>{text}</p>}   
            {/* conditional rendering only when we get the text only  */}
          </div>

          {/* Add to cart  */}
          <div className="add-to-cart">
            <button className="btn" type="submit">
              {" "}
              Add to Cart
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCard;
