import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import { Route, Routes } from "react-router";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
