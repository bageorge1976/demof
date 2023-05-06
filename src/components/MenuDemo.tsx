import React, { useState } from "react";
import DropDown from "./DropDown";
import Latex from "react-latex";

const MenuDemo: React.FC<{id:number, optionsList:string[], globalOptionSelected:string[], menuSelectedOption:any}> = (props) => {

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

    props.menuSelectedOption(city, props.id, props.globalOptionSelected);
    setSelectCity(city);
    
  };

  return (
    <>
      <div className="announcement">
        <div>
            <Latex>
          {selectCity
            ? `${selectCity}`
            : ""}
            </Latex>
        </div>
      </div>
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        {/* <div>{selectCity ? "Select: " + selectCity : "Select ..."}</div> */}
        <div> Select ...</div>
        {showDropDown && (
          <DropDown
            cities={cities()}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            citySelection={citySelection}
          />
        )}
      </button>
    </>
  );
};

export default MenuDemo;
