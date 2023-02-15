import Image from "next/image";
import project from "public/project.png";

export default function AboutMe() {
  return (
    <div>
      <section>
        <Image src={project} alt="placeholder for professional picture" />
      </section>
      <section>
        <h3>Tech Skills</h3>
        <p>skill 1</p>
      </section>
      <section>
        <p>
          Ea anim Lorem veniam velit anim Lorem nisi id incididunt. Pariatur
          fugiat eu occaecat dolor occaecat. Aliquip eu pariatur adipisicing
          reprehenderit labore reprehenderit cupidatat culpa minim mollit
          laboris duis. Minim ipsum consequat quis id magna veniam ea.
        </p>
      </section>
    </div>
  );
}
