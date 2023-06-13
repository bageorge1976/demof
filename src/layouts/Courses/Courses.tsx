import { Link } from "react-router-dom";

export const Courses = () => {
    return (
      <div>
        <Link type='button' className='btn main-color btn-lg text-white' to='/courses/math'>
                        Mathematics Grade 6<br></br>Geometry</Link>
<p></p>
        <Link type='button' className='btn main-color btn-lg text-white' to='/courses/engg'>
                        Electrical Engineering Digital<br></br> Communications</Link>
      </div>
    );
  }