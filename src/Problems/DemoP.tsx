import React from "react";
import { useEffect, useState } from 'react';

//import Menu from "./components/Menu";
import MenuDemo from "../components/MenuDemo"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export const DemoP: React.FC<{id:number}> = (props) => {

  let [counter,setCounter] = useState(0);
  const [tempOption, setTempOption] = useState(["","","",""]);
  let globalOption:string[] = tempOption;

  let optionsCorrectBank:string[];
  let optionsListBank=[
    ["$$\\frac{1}{2}$$", "London", "New York City", "Paris"],
    ["$$\\frac{1}{2}$$", "London", "Bucharest", "Paris"],
    ["$$\\frac{1}{2}$$", "London", "Sophia", "Paris"],
    ["$$\\frac{1}{2}$$", "London", "Iasi", "Paris"],
  ]; 


  const selectOption = (option: string, id:number, optionsSelected:string[]): void => {
    optionsSelected[id] = option; 
    console.log(optionsSelected);

    //setTempOption([optionsSelected[0], optionsSelected[1] , optionsSelected[2], optionsSelected[3]]);
    
    const clone = optionsSelected.slice(0);
    setTempOption(clone);
    //console.log(tempOption);
  };



  useEffect(() => {
    
    globalOption=tempOption;

    setCounter(++counter);
    console.log(counter.toString() + tempOption);

  }, [tempOption]);

return(
      <div>
        <hr />
        <img src={require("../Images/PublicImages/TopNotchCanadaLogoSquare.png")} width="100" height="10" className='img-fluid shadow-4' alt='...' />
      {/* <Menu />*/} 
      <p>
        Question index: {props.id}:
        Option:{tempOption[0]}
        Option:{tempOption[1]}
        Option:{tempOption[2]}
        Option:{tempOption[3]}
      </p>
      <hr />
      <p>Please select your answer to the first question</p>
      <MenuDemo id={0} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[0]}/>
      <hr />
      <p>Please select your answer to the second question</p>
      <MenuDemo id={1} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[1]}/>
      <hr />
      <p>Please select your answer to the third question</p>
      <MenuDemo id={2} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[2]}/>
      <hr />
      <p>Please select your answer to the last question</p>
      <MenuDemo id={3} menuSelectedOption={selectOption} globalOptionSelected={globalOption} optionsList = {optionsListBank[3]}/>
      <hr />
      </div>
      
    );
}