import "./App.css";
import Alert from "./components/Alert/Alert";
import AppleYoutbube from "./components/AppleYoutube/AppleYoutbube";
import FifthSection from "./components/FifthSection/FifthSection";
import FirstSection from "./components/FirstSection/FirstSection";
import Footer from "./components/Footer/Footer";
import FourthSection from "./components/FourthSection/FourthSection";

import Header from "./components/Header/Header";
import SecondSection from "./components/SecondSection/SecondSection";
import SixSection from "./components/SixSection/SixSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";

function App() {
  return (
    <>
      <Header />
      <Alert/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixSection/>


      {/* Apple youtube  */}
      {/* <AppleYoutbube/>    */}
      <Footer/>
    </>
  );
}

export default App;







