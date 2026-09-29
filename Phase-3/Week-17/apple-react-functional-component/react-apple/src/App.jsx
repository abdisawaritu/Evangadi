import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IpadPro from "./components/ipadPro/IpadPro";
import Alert from "./components/Alert/Alert";
import MacBookAir from "./components/MacBookAir/MacBookAir";

function App() {
  return (
    <>
      <Header />
      <Alert/>
      <IpadPro />
      <MacBookAir/>
      <Footer />
    </>
  );
}

export default App;
