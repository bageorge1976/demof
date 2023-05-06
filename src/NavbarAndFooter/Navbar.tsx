import { Link, NavLink } from "react-router-dom";


export const Navbar= () => {


    return(
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
        <div className='container-fluid'>
          <span className='navbar-brand'>Top Notch</span>
          <button className='navbar-toggler' type = 'button'
             data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'
             aria-controls='navbarNavDropdown' aria-expanded='false'
             aria-label='Toggle Navigation'>
          <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav'>
              <li className = 'nav-item dropdown'>
              <button className="btn btn-secondary dropdown-toggle main-color" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Math</button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><NavLink className="dropdown-item" to='/math/english'>English</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/math/espanol'>Español</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/math/francais'>Français</NavLink></li>
                </ul>    
              </li>
              <li className = 'nav-item dropdown'>
              <button className="btn btn-secondary dropdown-toggle main-color" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Engineering</button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><NavLink className="dropdown-item" to='/engg/english'>English</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/engg/espanol'>Español</NavLink></li>
                    <li><NavLink className="dropdown-item" to='/engg/francais'>Français</NavLink></li>
                </ul>    
              </li>

            </ul>

  
          </div> 
        </div>
      </nav>
    );
}
//AuthTNC