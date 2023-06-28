import React from "react";
import { Link } from "react-router-dom";

export const CourseContent: React.FC<{id:number, language:number}> = (props) => {
    const en = 0;
    const es = 1;
    const fr = 2;

    console.log("Loading this!")
    return(

        <div className="course-div">
            <p></p>
            {props.id===1 &&
                <>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/courses/math/P1'>
                        {props.language===en?<h6>P1. Height And Median In An Isosceles Triangle</h6>:""}
                        {props.language===es?<h6>P1. Altura Y Mediana En Un Triangulo Isosceles</h6>:""}
                        {props.language===fr?<h6>P1. Hauteur Et Médiane Dans Un Triangle Isocèle</h6>:""} 
                        </Link>
            <p></p>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/courses/math/P2'>                      
                        {props.language===en?<h6>P2. Median In A Right Angle Triangle</h6>:""}
                        {props.language===es?<h6>P2. Mediana En Un Triangulo Rectangulo</h6>:""}
                        {props.language===fr?<h6>P2. Médiane Dans Un Triangle Rectangle</h6>:""}
                        </Link>
                </>
                                       
            }
            {props.id===2 &&
                <>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/courses/engg/P1'>                   
                        {props.language===en?<h6>P1. Error Probability</h6>:""}
                        {props.language===es?<h6>P1. Probabilidad de error</h6>:""}
                        {props.language===fr?<h6>P1. Probabilité d'erreur</h6>:""}
                        </Link>
            <p></p>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/courses/engg/P2'>
                        {props.language===en?<h6>P2. The Matched Filter</h6>:""}
                        {props.language===es?<h6>P2. El filtro emparejado</h6>:""}
                        {props.language===fr?<h6>P2. Le filtre adapté</h6>:""}
                        </Link>
                </>
                                       
            }
        </div>
        
      );
}