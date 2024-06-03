import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage, HomePages, Layout, ProductDetails, Shop } from "./routers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePages />
              </Layout>
            }
          ></Route>
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          ></Route>

          <Route
            path="/product-details/:productId"
            element={
              <Layout>
                <ProductDetails />
              </Layout>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Layout>
                <CartPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
