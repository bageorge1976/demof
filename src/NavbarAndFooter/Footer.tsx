import { Link } from "react-router-dom";

export const Footer: React.FC<{language:number}> = (props) => {
    const en = 0;
    const es = 1;
    const fr = 2;
    return (
        <div className='main-color'>
            <footer className='container d-flex flex-wrap 
                justify-content-between align-items-center py-5 main-color'>
                <div>
                    <img src={require("../Images/PublicImages/TopNotchCanadaLogoSquare.png")} width="50" height="50" className=' img-fluid shadow-4' alt='logo' />
                    <p className="logo-color float-end" >©Top Notch<br/> Canada, Inc.</p>
                </div>
                <ul className='nav navbar-dark col-md-4 d-flex flex-row-reverse'>
                    <li className='nav-item '>
                        <Link type='button' className='nav-link px-2 btn btn-lg text-white' to='/'>
                            <img src={require("../Images/PublicImages/home.png")} width="50" height="50" className='justify-content-end img-fluid shadow-4' alt='logo' />
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link type='button' className='nav-link px-2 btn btn-lg text-white' to='/courses'>
                        {props.language===en && "Courses"}
                        {props.language===es && "Cursos"}           
                        {props.language===fr && "Cours"}
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}