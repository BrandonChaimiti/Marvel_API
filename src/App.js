import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//Import Routes
import Home from "./routes/Home"
// import About from "./routes/About"
import HeroDetails from "./routes/HeroDetails"

//Imported components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path={"/"} element={<Home />} />
      {/*<Route path={"about"} element={<About />} /> */}
      <Route path={"/:id"} element={<HeroDetails/>} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
