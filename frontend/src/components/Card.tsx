import { BsYoutube } from "react-icons/bs";
import { Deleteicon } from "../icons/Deleteicon";
import { Shareicon } from "../icons/Shareicon";

interface CardProps{
    title:string,
    link:string,
    type: "twitter"| "youtube"
}

export function Card({title,link,type}:CardProps) {
  return (
    <>
      <div
        id="main"
        className="bg-white rounded-md shadow-md outline-gray-100 w-[300px] h-[400px] "
      >
        <div id="secondmain" className="justify-between flex">
          <div id="right" className="flex items-center gap-2">
            <Shareicon></Shareicon>
            Project ideas
          </div>

          <div
            id="left"
            className="flex justify-between  gap-[6px] items-center"
          >
            <Shareicon>
                <a href={link} target="_blank"
            </Shareicon>
            <Deleteicon></Deleteicon>
          </div>
        </div>
        { 
        type === "youtube" && <iframe
        className="w-full pt-[4px]"
          src="https://www.youtube.com/embed/CgVQkHQqNNI?si=7wgXuNbMiaqkNiNt"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        
        ></iframe> }
        type === "twitter" &&  <blockquote className="twitter-tweet">
          <a href="https://twitter.com/username/status/807811447862468608"></a>
        </blockquote>
      </div>
    </>
  );
}
