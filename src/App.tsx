import React from "react";
import { useEffect, useState } from 'react';
import "./App.css";
import { Navbar } from "./NavbarAndFooter/Navbar";
import { Footer } from "./NavbarAndFooter/Footer";
import { DemoP } from "./Problems/DemoP";
//import Menu from "./components/Menu";
import MenuDemo from "./components/MenuDemo"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App(): JSX.Element {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">

    <BrowserRouter>
    <Navbar />
    
    <div className="flex-grow-1">
    <Routes>
        <Route path="/math/english" element={<DemoP id={1} />} />
        <Route path="/math/espanol" element={<DemoP id={2} />} />
        <Route path="/math/francais" element={<DemoP id={3}/>} />
        <Route path="/engg/english" element={<DemoP id={4}/>} />
        <Route path="/engg/espanol" element={<DemoP id={5}/>} />
        <Route path="/engg/francais" element={<DemoP id={6}/>} />
    </Routes>
    

      
      </div>
      <Footer />
      </BrowserRouter>
      </div>
  );
}
