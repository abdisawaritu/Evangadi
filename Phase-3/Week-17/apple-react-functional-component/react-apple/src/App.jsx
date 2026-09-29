import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import IpadPro from "./components/ipadPro/IpadPro";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <>
      <Header />
      <Alert/>
      <IpadPro />
      <Footer />
    </>
  );
}

export default App;
