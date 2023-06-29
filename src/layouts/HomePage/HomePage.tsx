import "../../App.css";
import { DemoP } from "../../Problems/DemoP";

export const HomePage: React.FC<{language:number}> = (props) => {
  const en = 0;
  const es = 1;
  const fr = 2;
    
  return (
      <div>
        {props.language===en &&<div className='video-div'>
          <iframe src="https://topnotchcanada.ca/edom/movies/HomepageEnglishIntroduction.mp4" loading="lazy" title="Homepage English Introduction" allow="encrypted-media; fullscreen;" className='iframe-div'>
          </iframe>
        </div>}
        {props.language===es &&<div className='video-div'>
          <iframe src="https://topnotchcanada.ca/edom/movies/HomepageArgentinaIntroduccion.mp4" loading="lazy" title="Homepage Introduccion Argentina" allow="encrypted-media; fullscreen;" className='iframe-div'>
          </iframe>
        </div>}
        {props.language===fr &&<div className='video-div'>
          <iframe src="https://topnotchcanada.ca/edom/movies/HomepageFrenchIntroduction.mp4" loading="lazy" title="Homepage French Introduction" allow="encrypted-media; fullscreen;" className='iframe-div'>
          </iframe> 
        </div>}
        <DemoP id={0} language={props.language}/>
      </div>
    );
  }