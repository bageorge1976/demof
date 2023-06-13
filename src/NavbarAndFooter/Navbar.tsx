import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


export const Navbar: React.FC<{languageSetFunction:any}> = (props) => {
  const en = 0;
  const es = 1;
  const fr = 2;
  const [language, setLanguage] = useState(en);

  useEffect(() => {
    
    props.languageSetFunction(language);

  }, [language]);

    return(
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
        <div className='container-fluid'>
          
          <div>
          <img src={require("../Images/PublicImages/TopNotchCanadaLogoSquare.png")} width="50" height="50" className=' img-fluid shadow-4' alt='logo' />
          <p className="logo-color float-end" >©Top Notch<br/> Canada, Inc.</p>
          </div>

           <button className='navbar-toggler' type = 'button'
             data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
             aria-controls='navbarNavDropdown' aria-expanded='false'
             aria-label='Toggle Navigation'>
          <span className='navbar-toggler-icon'></span>
          </button> 
          
          <div className='collapse navbar-collapse flex-row-reverse ' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className = 'nav-item dropdown'>
              <NavLink type='button' className='btn btn-lg text-white' to='/courses'>
                 {/* <button className="btn btn-secondary dropdown-toggle main-color" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Courses</button> */}
                {language===en && "Courses"}
                {language===es && "Cursos"}
                {language===fr && "Cours"}
              </NavLink>
{/*                 <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>English</li>
                    <li><NavLink className="dropdown-item" to='/math/espanol'>Español</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/math/francais'>Français</NavLink></li>
                </ul> */}    
              </li>
              <li className = 'nav-item dropdown'>
              <button className="btn dropdown-toggle btn-lg tongue-color" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"><img src={require("../Images/PublicImages/languages.png")} width="28" height="28" className='img-fluid shadow-4' alt='logo' /></button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li>
                    {/* <NavLink className="dropdown-item" to='/engg/english'>English</NavLink> */}
                        <button type='button' className='dropdown-item' onClick={(): void => {setLanguage(en);}}>
                                English
                        </button>
                    
                    </li>
                    <li>
                    {/* <NavLink className="dropdown-item" to='/engg/espanol'>Español</NavLink> */}
                        <button type='button' className='dropdown-item' onClick={(): void => {setLanguage(es);}}>
                                Español
                        </button>
                    
                    </li>
                    <li>
                    {/* <NavLink className="dropdown-item" to='/engg/francais'>Français</NavLink> */}
                        <button type='button' className='dropdown-item' onClick={(): void => {setLanguage(fr);}}>
                               Français
                        </button>
                    </li>
                
                </ul>    
              </li>

            </ul>

  
          </div> 
        </div>
      </nav>
    );
}
//AuthTNC