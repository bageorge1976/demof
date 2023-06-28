import React from "react";
import { useEffect, useState } from 'react';
import "./App.css";
import { Navbar } from "./NavbarAndFooter/Navbar";
import { Footer } from "./NavbarAndFooter/Footer";
import { DemoP } from "./Problems/DemoP";
//import Menu from "./components/Menu";
import MenuDemo from "./components/MenuDemo"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./layouts/HomePage/HomePage";
import { Courses } from "./layouts/Courses/Courses";
import { CourseContent } from "./layouts/Courses/CourseContent";

export default function App(): JSX.Element {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const en = 0;
  const es = 1;
  const fr = 2;

  const [language, setLanguage] = useState(en);

 
  const setTheLanguage = (lenguaje: number): void => {
    //optionsSelected[id] = option; 
    //console.log(optionsSelected);

    //setTempOption([optionsSelected[0], optionsSelected[1] , optionsSelected[2], optionsSelected[3]]);
    
    //const clone = optionsSelected.slice(0);
    setLanguage(lenguaje);
    //console.log(tempOption);
  };


  return (
    <div className="d-flex flex-column min-vw-100 min-vh-100">

    <BrowserRouter>
    <Navbar languageSetFunction={setTheLanguage}/>
    <p></p>
    <div className="flex-grow-1">
    <Routes>
        <Route path='/' element={<HomePage language={language}/>} />
        <Route path='/courses' element={<Courses language={language} />} />
        <Route path='/courses/math' element={<CourseContent id={1} language={language}/>}></Route>
          <Route path='/courses/math/P1' element={<DemoP id={1} language={language}/>} />
          <Route path='/courses/math/P2' element={<DemoP id={2} language={language}/>} />
        

        <Route path='/courses/engg' element={<CourseContent id={2} language={language}/>}></Route>
          <Route path='/courses/engg/P1' element={<DemoP id={3} language={language}/>} />
          <Route path='/courses/engg/P2' element={<DemoP id={4} language={language}/>} />

        
        
    </Routes>
    

      
      </div>
      <Footer language={language}/>
      </BrowserRouter>
      </div>
  );
}
