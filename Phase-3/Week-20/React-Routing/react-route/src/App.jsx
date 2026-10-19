
import "./App.css";

import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Header />
      <AppRoutes/>
      

      {/* shared between all the componenet  and its  indepedent of the routes   the header and footer  is  found on all the pages and independent of the  routes  so they are placed outside of the routes */}
    </>
  );
}

export default App;
