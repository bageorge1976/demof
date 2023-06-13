import React from "react";
import { Link } from "react-router-dom";

export const CourseContent: React.FC<{id:number}> = (props) => {

    console.log("Loading this!")
    return(

        <div>
                    <hr />
            {props.id===1 &&
                <>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/courses/math/P1'>
                        P1. Height And Median <br></br> In An Isosceles Triangle </Link>
            <p></p>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/courses/math/P2'>
                        P2. Median In A <br></br>Right Angle Triangle</Link>
                </>
                                       
            }
            {props.id===2 &&
                <>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/courses/engg/P1'>
                    P1. Error Probability</Link>
            <p></p>
                    <Link type='button' className='btn main-color btn-lg text-white' to='/courses/engg/P2'>
                    P2. The Matched Filter</Link>
                </>
                                       
            }
        </div>
        
      );
}