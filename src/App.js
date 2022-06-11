import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import Shop from "./components/Shop";
import CheckOut from "./components/CheckOut";
import cardData from "./data/cardData";
import { useState } from "react";

function App() {
  const [CardData, setCardData] = useState(cardData);
  const [cartAmount, setCartAmount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

const addToCart = (id) => {
    const check_index = cartItems.findIndex(item => item.id === id);
    if (check_index !== -1) {
      cartItems[check_index].cartAmount++;
      console.log("Quantity updated:", cartItems);
    } else {
      cartItems.push({...CardData.find(c => c.id === id), cartAmount: 1})
      console.log('The product has been added to cart:', cartItems);
    }
}

  const handleClick = (id) => {
    setCartAmount(cartAmount + 1);
    addToCart()
    console.log(cartItems);
  }

  return (
    <>
    {/* <a href="https://www.flaticon.com/free-icons/daisy" title="daisy icons">Daisy icons created by Freepik - Flaticon</a> */}
      <BrowserRouter>
        <Header cartAmount={cartAmount} />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/shop" element={<Shop handleClick={handleClick} CardData={CardData} />} />
          <Route path="/checkOut" element={<CheckOut cartAmount={cartAmount} cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
