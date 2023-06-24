import { Link } from "react-router-dom";

export const Courses: React.FC<{ language:number}> = (props) => {

  const en = 0;
  const es = 1;
  const fr = 2;

  return (
      <div>
        <Link type='button' className='btn main-color btn-lg text-white' to='/courses/math'>
                        {props.language===en?<h6>Mathematics Grade 6 Geometry</h6>:""}
                        {props.language===es?<h6>Matemáticas Grado 6 Geometría</h6>:""}
                        {props.language===fr?<h6>Mathématiques 6e année Géométrie</h6>:""}
                        </Link>
<p></p>
        <Link type='button' className='btn main-color btn-lg text-white' to='/courses/engg'>
                        {props.language===en?<h6>Electrical Engineering Digital Communications</h6>:""}
                        {props.language===es?<h6>Ingeniería Eléctrica Comunicaciones Digitales</h6>:""}
                        {props.language===fr?<h6>Génie électrique Communications numériques</h6>:""}
                        </Link>
      </div>
    );
  }