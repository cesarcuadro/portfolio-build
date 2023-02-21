import React from 'react'
import Image from 'next/image'
import resume1 from 'public/1.Resume.png'
import resume2 from 'public/2.Resume.png'

const Resume = () => {
  return (
    <div className="border-2 border-yellow-500 mt-12 mx-2 text-center shadow-md bg-gradient-to-br  from-purple-900 to-black w-11/12 rounded-lg font-serif pb-3">
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

