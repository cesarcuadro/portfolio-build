import Link from "next/link";
import Image from "next/image";
import project from 'public/project.png'

export default function AboutMe() {
  return (
    <>
      <h1>About Me</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <section>
        <h3>Tech Skills</h3>
        <p>skill 1</p>
      </section>
      <section>
        <Image
        src={project}
        alt="placeholder for professional picture"
        />
        <p>Ea anim Lorem veniam velit anim Lorem nisi id incididunt. Pariatur fugiat eu occaecat dolor occaecat. Aliquip eu pariatur adipisicing reprehenderit labore reprehenderit cupidatat culpa minim mollit laboris duis. Minim ipsum consequat quis id magna veniam ea.</p>
      </section>
    </>
  );
}
