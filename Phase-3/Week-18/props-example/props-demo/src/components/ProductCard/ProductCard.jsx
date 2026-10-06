import styles from  "./ProductCard.module.css";
function ProductCard(props) {
  console.log(props);
  const {title, description , imgUrl , price , color} = props;
  return (
    <>
      <div className={styles["product-card"]}>
        <div className={styles["card-header  {color}]}>
          <h2 className={styles["product-title"]}> {title} </h2>
        </div>

        {/* product-image */}
        <div className={styles["product-image"]}>
          <img src={imgUrl} />
        </div>

        {/* product price and description  */}

        <div className={styles["product-content"]}>
          <h3 className={styles["Product-price"]}>{price}</h3>
          <p className={styles["product-description"]}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
