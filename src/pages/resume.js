import React from 'react'
import Image from 'next/image'
import resume1 from 'public/1.Resume.png'
import resume2 from 'public/2.Resume.png'

const Resume = () => {
  return (
    <div className="border-2 border-purple-700 mt-12 mx-2 text-center bg-gradient-to-br shadow-gray-700 shadow-md from-slate-600 via-slate-500 to-slate-300 w-11/12 rounded-lg font-serif pb-3 text-yellow-500">
      <a href="/cesar_cuadro_resume.pdf" target="_blank">Download as PDF
        <Image
        src={resume1}
        alt="resume1"
        />
        <Image
        src={resume2}
        alt="resume2"
        />
        </a>
    </div>
  )
}

export default Resume

/*
import React from "react";
import resume from "public/resume.png";
import Image from "next/image";

const Resume = () => {
  return (
    <>
    <div className="border-2 border-black my-1 ml-1 text-center bg-gradient-to-br shadow-gray-700 shadow-md from-red-300 via-yellow-100 to-teal-200 w-40 rounded-lg font-serif">
    <a href="/renita-gidlund-resume.pdf" target="_blank">Download as PDF</a>
    </div>
    <div>
      <Image src={resume} alt="resume"/>
    </div>
    </>
  );
};

export default Resume;
*/