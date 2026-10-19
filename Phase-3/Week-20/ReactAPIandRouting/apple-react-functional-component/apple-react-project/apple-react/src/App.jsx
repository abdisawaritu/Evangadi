import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router";
import Mac from "./pages/Mac/Mac";
import Ipad from "./pages/Ipad/Ipad";

function App() {
  return (
    <>
      <Header />
      <br />
      <br />
      {/*  Home page : all the section between Header and Footer */}
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
