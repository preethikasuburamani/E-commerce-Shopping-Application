import "./App.css";
import Header from "./E-commerceWebsite/Header"
import Home from "./E-commerceWebsite/Home"
import Nav from "./E-commerceWebsite/Nav"
import {  HashRouter,Route,Routes,Link } from "react-router-dom"
import Products from "./E-commerceWebsite/Products"
import CountactUS from "./E-commerceWebsite/CountactUS"
import AboutUs from "./E-commerceWebsite/AboutUs"
import Footer from "./E-commerceWebsite/Footer"
import Cart from "./E-commerceWebsite/Cart";
import CreateProduct from "./E-commerceWebsite/CreateProduct";
import Signin from "./E-commerceWebsite/Signin";
import Register from "./E-commerceWebsite/Register";
import ProductDetails from "./E-commerceWebsite/ProductDetails";

function App() {
 
 return(
  <HashRouter>

      <div className="app-container">
        <Header />
        <Nav />
      
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/CountactUs" element={<CountactUS />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/createProduct" element={<CreateProduct/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/productDetail" element={<ProductDetails/>}/>
          </Routes>
        </div>

        <Footer />
      </div>

    </HashRouter>
  );
}

export default App;