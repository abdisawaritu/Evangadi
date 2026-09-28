import appleImage from "../../assets/image.png";

function Header() {
  return (
    <>
      <div className="contanier">
        <h1>Header Section</h1>
        <img src={appleImage} alt="apple image" />
      </div>
    </>
  );
}

export default Header;
