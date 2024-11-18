/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Routes,Route } from "react-router-dom"
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer"
import CartContainer from "./components/pages/cart/CartContainer"
import { Navbar } from "./components/layout/navbar/Navbar"
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer"
import Checkout from "./components/pages/checkout/Checkout"
import { CartContextProvider } from "./context/CartContext"


function App() {
  

  return (
    <BrowserRouter>
    <CartContextProvider>
    <Navbar />
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:name" element={<ItemListContainer />} />
      <Route path="/cart"element={<CartContainer/>}/>
      <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<h2>404 not found</h2>}/>
    </Routes>
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
