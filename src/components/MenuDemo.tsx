import React, { useState, useEffect } from "react";
import DropDown from "./DropDown";
import Latex from "react-latex";
import "../App.css";

const MenuDemo: React.FC<{id:number, pageItemLanguage:number, pageItemType:string, pageItemHeader:string, pageItemFooter:string, optionsList:string[], globalOptionSelected:string[], menuSelectedOption:any}> = (props) => {
  const en = 0;
  const es = 1;
  const fr = 2;


  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectCity, setSelectCity] = useState<string>("");
  const cities = () => {
    return props.optionsList;
  };

  /**
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param city  The selected city
   */
  const citySelection = (city: string): void => {

    //here we execute the top function selectOption;
    //globalOptionSelected gets initialized
    props.menuSelectedOption(city, props.id, props.globalOptionSelected);
    setSelectCity(city);
    
  };

  useEffect(() => {
    
    setSelectCity("");
  
    //setCounter(++counter);
    //console.log(counter.toString() + tempOption);
  
  }, [props.pageItemLanguage]);

  const [numericalInput, setNumericalInput] = useState('');
  const [numericalInputEntered, setNumericalInputEntered] = useState('');

  function enterNumericalInput(){
    if(isNumeric(numericalInput)){
      props.menuSelectedOption(numericalInput, props.id, props.globalOptionSelected);
      setNumericalInputEntered(numericalInput);
    }
    else{
      props.menuSelectedOption("NaN"+numericalInput, props.id, props.globalOptionSelected);
      setNumericalInputEntered("NaN"+numericalInput);
    }
  }

  function changeNumericalInputHandler(event: { target: { value: React.SetStateAction<string>; }; }){    
    setNumericalInput(event.target.value)
  }

  function isNumeric(str: string | number) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }

  const [latexEq, setLatexEq] = useState('');
  const [latexEqEntered, setLatexEqEntered] = useState('');

  function enterlatexEq(){
      props.menuSelectedOption(latexEq, props.id, props.globalOptionSelected);
      setLatexEqEntered(latexEq);
  }

  function changeLatexEqHandler(event: { target: { value: React.SetStateAction<string>; }; }){    
    setLatexEq(event.target.value)
  }
  

let pageItemHeaderSplit = (props.pageItemHeader).split("<kaTex>"); 
let pageItemHeaderIndices:number[] = [];
for (var i = 0; i < pageItemHeaderSplit.length; i++) {
  pageItemHeaderIndices.push(i);
} 
//console.log("Problem is here:" + pageItemHeaderSplit)

  return (
    <>
    <div className="item-div mx-auto">
       {pageItemHeaderIndices.map((number) => 
        number%2===0?
          <div className="d-inline" dangerouslySetInnerHTML={{__html: pageItemHeaderSplit[number] }}></div>
          :
          <div className="d-inline" > <Latex>{`${pageItemHeaderSplit[number]}`}</Latex></div>

      )}
    </div>



    {(props.pageItemType==="info") && (<div></div>)}

    {(props.pageItemType==="num") && (
      <div>
      {/*<p>{numericalInput}</p>*/}
      <div>{numericalInputEntered}</div>
      <input type="text" placeholder="0.00" size={12} value={numericalInput} onChange={changeNumericalInputHandler}/>
      <button onClick={enterNumericalInput}>{props.pageItemLanguage===en && "Enter" }{props.pageItemLanguage===es && "Entra" }{props.pageItemLanguage===fr && "Entre" }</button>
      </div>)}
    
    {(props.pageItemType==="eq") && (
      <div>
      {/*$$\\\frac{1}{24}+a^2$$*/}
      <div>
            <Latex>
            {`${latexEqEntered}`}
            </Latex>
        </div>
        <p></p>
      <input type="text" placeholder="a=b+c" size={30} value={latexEq} onChange={changeLatexEqHandler}/>
      <button onClick={enterlatexEq}>{props.pageItemLanguage===en && "Enter" }{props.pageItemLanguage===es && "Entra" }{props.pageItemLanguage===fr && "Entre" }</button>
      </div>)}

      {(props.pageItemType==="menu") && (
      <div>
      <div className="announcement course-div">
        <div>
            <Latex>
          {selectCity
            ? `${selectCity}`
            : ""}
            </Latex>
        </div>
      </div>
      <button
        className={showDropDown ? "active mx-auto" : undefined} 
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        {/* <div>{selectCity ? "Select: " + selectCity : "Select ..."}</div> */}
        {props.pageItemLanguage===en && (<div> Select ...</div>)}
        {props.pageItemLanguage===es && (<div> Seleccione ...</div>)}
        {props.pageItemLanguage===fr && (<div> Selecte ...</div>)}
        {showDropDown && (
          <DropDown
            cities={cities()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            citySelection={citySelection}
          />
        )}
      </button>
      </div>)}
      <div dangerouslySetInnerHTML={{__html: props.pageItemFooter}}></div>
    </>
  );
};

export default MenuDemo;
