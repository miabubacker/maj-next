import { Routes, Route, Link } from "react-router";
import Home from "./Component/Home/Home";
import Header from "./Component/Assets/Header/Header";
import Footer from "./Component/Assets/Footer/Footer";

export default function App() {
  return (
    <div>
      {/* Client-side navigation links (avoids full-page reloads) */}
      <Header />
      {/* Route matching engine */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}
