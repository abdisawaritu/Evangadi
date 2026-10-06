import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";
import products from "../../assets/data.js";

function ProductList() {
  console.log(products);
  // let numbers = [1, 2, 3, 4, 5];
  // let products = [{ title: "", description: "" }, {}, {}, {}];

  return (
    <>
      <div className={styles.contanier}>
        {/* product 1 */}

        <ProductCard
          title="The let them theory"
          imgUrl="https://m.media-amazon.com/images/I/51wzfAWW1bL._SY445_SX342_.jpg"
          price="$12.99"
          description="If you've ever felt stuch , overwhelmed , or frustrated with where
            you are , the problem isn't you. The problem is the power you give
            to oher people. two simple words-let them-will set you free. free
            from the opinions, drame , and judgements of others. free from the
            exhausting cycle of trying to manage everything and everyone around
            you."
        />
        <ProductCard
          title="Coding Interview Patterns"
          imgUrl="https://m.media-amazon.com/images/I/516DZU30-wL._SL1430_.jpg"
          price="$38.00"
          description="Coding interviews are tough, and they're only getting tougher, typically demanding months of preparation. What we all want is a way to master algorithms and data structures without having to spend countless hours sifting through endless, unfocussed resources."
        />
      </div>

      {products.map((product) => {
        const { id, title, imgLink, price, description ,color } = product;
        return (
          <ProductCard
            key={id}
            title={title}
            imgUrl={imgLink}
            price={price}
            description={description}
            color = {color}
          />
        );
      })}
    </>
  );
}

export default ProductList;
