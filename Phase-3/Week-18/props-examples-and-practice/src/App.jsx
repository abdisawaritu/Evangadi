import ProductCard from "./components/ProductCard";
import StudentList from "./components/StudentList";

function App() {
  const product = {
    title: "Laptop",
    price: 50000,
    catergory: "Computer",
    brand: "HP",
  };
  return (
    <>
      <StudentList />;
      <ProductCard product={product} />
    </>
  );
}

export default App;
