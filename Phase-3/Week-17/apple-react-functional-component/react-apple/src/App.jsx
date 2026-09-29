import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IpadPro from "./components/ipadPro/IpadPro";
import Alert from "./components/Alert/Alert";
import MacBookAir from "./components/MacBookAir/MacBookAir";
import Iphone11Pro from "./components/Iphone11Pro/Iphone11Pro";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <IpadPro />
      <MacBookAir />
      <Iphone11Pro />
      <Footer />
    </>
  );
}

export default App;
