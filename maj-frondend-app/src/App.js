import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Component/Home/Home";
import 'font-awesome/css/font-awesome.min.css';
import Header from "./Component/Assets/Header/Header";
import Footer from "./Component/Assets/Footer/Footer";
import Products from "./Component/Pages/Products/Products";
import Location from "./Component/Pages/Location/Location";

export default function App() {
  return (
    <div>
      {/* Client-side navigation links (avoids full-page reloads) */}
      <Header />
      {/* Route matching engine */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/location" element={<Location />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}
