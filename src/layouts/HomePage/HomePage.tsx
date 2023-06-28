import "../../App.css";
import { DemoP } from "../../Problems/DemoP";

export const HomePage: React.FC<{language:number}> = (props) => {
  const en = 0;
  const es = 1;
  const fr = 2;
    
  return (
      <div>
        {props.language===en &&<div className='video-div'>
          <iframe src="https://share.synthesia.io/embeds/videos/db9c1898-d4eb-49b3-b079-f95b734e24d0" loading="lazy" title="Synthesia video player - Your AI video" allow="encrypted-media; fullscreen;" className='iframe-div'>
          </iframe>
        </div>}
        {props.language===es &&<div className='video-div'>
          <iframe src="https://share.synthesia.io/embeds/videos/70971aa8-1eb4-4a64-94d1-b40fea18d9c5" loading="lazy" title="Synthesia video player - Your AI video" allow="encrypted-media; fullscreen;" className='iframe-div'>
          </iframe>
        </div>}
        {props.language===fr &&<div className='video-div'>
          <iframe src="https://share.synthesia.io/embeds/videos/8cca4bc2-917c-4b26-8a45-c6535a425833" loading="lazy" title="Synthesia video player - Your AI video" allow="encrypted-media; fullscreen;" className='iframe-div'>
          </iframe> 
        </div>}
        <DemoP id={0} language={props.language}/>
      </div>
    );
  }