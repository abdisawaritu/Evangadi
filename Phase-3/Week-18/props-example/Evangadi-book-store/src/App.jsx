import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div>
      {/* Header */}
      <Header/>
      <br /><br />
      {/* Products */}
      <Products/>
      {/* Footer */}
      <br />
      <Footer/>
    </div>
  );
}

export default App;
