import Image from "next/image";
import portrait from "public/portrait.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSquareJs,
  faGit,
  faHtml5,
  faCss3,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-center">
        <Image src={portrait} alt="" className="rounded-full w-16 h-16 m-2 border-2 border-purple-700"/>
      </div>
      
      
      <section className="m-2 rounded-xl p-2 space-y-1">
        <h3 className="text-xl text-center font-lakers">Technical Skills</h3>
        <div className="flex justify-evenly">
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faSquareJs} />
          <FontAwesomeIcon icon={faGit} />
          <FontAwesomeIcon icon={faGem} />
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faBootstrap} />
        </div>
      </section>

      <section className="border-2 border-yellow-500 shadow-xl m-2 rounded-xl p-2 object-center bg-gradient-to-b from-purple-900 to-black">
      <h1 className="font-bold text-m">My story:</h1>
       <p className="px-2"> Full stack web developer with strong analytical and communication skills. Dedicated to discovering, developing, and implementing creative solutions to complex web application challenges. Extensive experience in troubleshooting steps from current role as a ground radio maintainer in the Marine Corps Reserves.</p>
       <h2 className="font-bold text-m">Transferrable Skills:</h2>
       <p className="px-2"> Here is a summary of my transferrable skills</p>
      </section>
    </div>
  );
}
/* 
m-2 space-y-1 rounded-xl border-2 border-purple-700 p-20 shadow-x
*/