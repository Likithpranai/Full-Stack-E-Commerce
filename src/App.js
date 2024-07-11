import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import mens_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kids_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        {" "}
        {/* MAPPING BROWSERS URL TO APPROPRIATE COMPONENTS WHEN CLICKED */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />{" "}
          {/*Set Up Route for HOME PAGE */}
          <Route
            path="/mens"
            element={<ShopCategory banner={mens_banner} category="men" />}
          />{" "}
          {/*Set Up Route for MENS PAGE */}
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />{" "}
          {/*Set Up Route for WOMENS PAGE */}
          <Route
            path="/kids"
            element={<ShopCategory banner={kids_banner} category="kid" />}
          />{" "}
          {/*Set Up Route for KIDS PAGE */}
          <Route path="product" element={<Product />} />{" "}
          {/*Set Up Route for PRODUCT PAGE */}
          <Route path=":productId" element={<Product />} />{" "}
          {/*Set Up Route for PRODUCT-ID PAGE */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
