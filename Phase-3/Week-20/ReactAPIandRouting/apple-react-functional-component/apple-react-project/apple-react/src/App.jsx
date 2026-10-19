import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router";
import Mac from "./pages/Mac/Mac";
import Ipad from "./pages/Ipad/Ipad";
import Support from "./pages/Support/Support";
import Tv from "./pages/Tv/Tv";
import Watch from "./pages/Watch/Watch";
import Music from "./pages/Music/Music";
import Iphone from "./pages/Iphone/Iphone";
import ProductPage from "./pages/ProductPage/ProductPage";
import NotFound from "./pages/NotFound/NotFound";
import SharedLayout from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <br />
      <br />
      <br />

      {/*  Home page : all the section between Header and Footer */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/support" element={<Support />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/music" element={<Music />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/productpage" element={<ProductPage />} />
        </Route>

        {/*  admin route */}

        {/* <Route path="/admin" element={<SharedLayout />}>
          <Route index element={<h1>Admin DashBoard</h1>} />
          <Route path="users" element={<h1>Admin users</h1>} />
        </Route> */}

        {/*Student route */}
        {/* <Route path="/student" element={<SharedLayout />}>
          <Route index element={<h1>Student DashBoard</h1>} />
          <Route path="/courses" element={<h1>Student Courses</h1>} />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
