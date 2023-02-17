import React from "react";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Contact from "./components/Contact"
import Home from "./components/Home"
import Service from "./components/Service"
import About from "./components/About"
import Brand from "./components/Brand"
import Footer from "./components/Footer";



import "./Styles/App.scss";
import "./Styles/Header.scss";
import "./Styles/About.scss"
import "./Styles/Contact.scss"
import "./Styles/Home.scss"
import "./Styles/Footer.scss"
import "./Styles/mediaquery.scss"




function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/brand" element = {<Brand/>}/>
        <Route path = "/service" element = {<Service/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
