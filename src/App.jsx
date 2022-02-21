import React from "react";
import Header from "./Components/Header.jsx";
import About from "./Components/AboutUs.jsx";
import Gallery from "./Components/Gallery.jsx";
import Movie from "./Components/Movie.jsx";
import Contact from "./Components/ContactUs.jsx";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="container">      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="movies" element={<Movie />} />
          <Route path="contact-us" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
