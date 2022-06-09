import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Shop from "./components/Shop";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <>
    {/* <a href="https://www.flaticon.com/free-icons/daisy" title="daisy icons">Daisy icons created by Freepik - Flaticon</a> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
