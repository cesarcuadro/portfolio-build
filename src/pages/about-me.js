import Image from "next/image";
import project from "public/project.png";
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
    <div>
      <div className="flex justify-center">
        <Image src={project} alt="" className="rounded-full w-16 h-16 m-2 border-2 border-black"/>
      </div>
      
      <section className="border-2 border-black m-2 rounded-xl p-2 object-center">
        <h3 className="text-xl">Technical Skills</h3>
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
      <section className="border-2 border-black m-2 rounded-xl p-2 object-center">
      <h1>My story:</h1>
       <p> Full stack web developer with strong analytical and communication skills. Dedicated to discovering, developing, and implementing creative solutions to complex web application challenges. Extensive experience in troubleshooting steps from current role as a ground radio maintainer in the Marine Corps Reserves.</p>
       <h2>Transferrable Skills:</h2>
       <p> Here is a summary of my transferrable skills</p>
      </section>
    </div>
  );
}
