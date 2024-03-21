import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer } from "./components/page/ItemDetailConteiner/ItemDetailContainer";
import ItemListContainer from "./components/page/ItemListContainer/ItemListContainer";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/page/checkout/checkoutContainer";
import CartContextProvider from "./context/CartContext";
import { CartContainer } from "./components/page/Cart/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/checkout" element={<CheckoutContainer />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
