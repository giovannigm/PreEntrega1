import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar/NavBar";
import { Cart } from "./components/page/Cart/Cart";
import { ItemDetailContainer } from "./components/page/ItemDetailContainer";
import ItemListContainer from "./components/page/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
