import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'


const skills = [
  {
    name: "Frontend",
    image: ["/assets/js.png", "/assets/react.png", "/assets/tailwind.png"],
    desc: "Experienced in building interactive UIs using JS, React, and TailwindCSS."
  },
  {
    name: "Backend",
    image: ["/assets/node.png", "/assets/express.png", "/assets/api.png"],
    desc: "Skilled in creating robust backend APIs using Node.js and Express."
  },
  {
    name: "Database",
    image: ["/assets/sql.png", "/assets/mongodb.png", "/assets/prisma.png"],
    desc: "Comfortable with relational and NoSQL databases like SQL, MongoDB, and Prisma ORM."
  },
  {
    name: "Languages",
    image: ["/assets/c.png", "/assets/cpp.png", "/assets/python.png"],
    desc: "Proficient in C, C++, and Python for problem solving and backend logic."
  }
];

export const Skills = () => {
    useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <section id="skills" className="relative min-h-screen flex items-center bg-[#0f0f1b] text-white"
    >
         <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-70
                top-24 left-[42%] '></div>


         

      <div  className="max-w-6xl mx-auto px-4 text-center">
        <header >
        
        

        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          My Expertise 
          <br></br><span className="text-purple-400">and Skills</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-3xl mx-auto">
          These are the core technologies I’ve been working with throughout my journey.
        </p>
        </header>
        <div className='w-full px-4 sm:px-6'>
        <div className="flex flex-wrap justify-between gap-y-12">
          {skills.map((skill, index) => (
            <div
             key={index}
               data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
                className="w-full sm:w-[48%] md:w-[23%] bg-[#1a1a2e] hover:bg-purple-800 hover:scale-105 transition-all duration-300 p-6 rounded-lg text-center"

             >
              <div className="flex justify-center gap-4 mb-4">
                {skill.image.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${skill.name}-${i}`}
                    className="h-10 w-10 object-contain"
                  />
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
