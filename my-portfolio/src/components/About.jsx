import React, { useState } from 'react'

export const About = () => {
    const [showMore , setShowMore] = useState(false);
    const handleToggle = () =>{
        setShowMore(prev => !prev);
    }
  return (
    <section id='about' className='min-h-screen overflow-hidden flex items-cnter justify-center text-white px-4 sm:px-6'>
        <div className='max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
            <figure data-aos='fade-right' data-aos-delay='500'
            className='flex flex-wrap justify-center gap-4 relative'>
                <div className='h-[200px] sm:h-[300px] w-[300px] sm:w-[400px] lg:h-[300px] lg:w-[500px] bg-gradient-to-1
                from-[#6d2897] via-[#6c95f5] to-[#bb61c5] absolute transform rotate-12 z-0 right-5 -top-2 md:top-10 rounded-full'></div>
                <img src="/assets/about.png" alt="about image" 
                className='relative  z-10 w-56 h-64 sm:w-72 sm:h-80 md:w-96 md:h-[28rem] rounded-lg shadow-lg
                '/>
            </figure>

            <article
            data-aos='fade-left' data-aos-delay='500' 
            className='text-center lg:text-left relative'>
                <div className='absolute z-0 w-40 h-40 sm:w-60 sm:h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-70
                -top-5 left-10'></div>
                <header>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6'>
                        About Me
                    </h1>
                </header>
                <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-4 leading-relaxed'>
            I'm a full stack developer with a passion for turning ideas into interactive digital experiences. With a strong foundation in the MERN stack, I enjoy building fast, intuitive, and user-friendly web applications.
          </p>

          {/* Show this part only if showMore is true */}
          {showMore && (
            <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed'>
              My work blends technical precision with creative problem-solving — whether it’s designing responsive interfaces or managing complex backend logic.
              Beyond the code, I’m constantly exploring new tools and trends in the tech space, aiming to bring futuristic and meaningful solutions to life. When I'm not debugging or deploying, you’ll find me experimenting with UI animations or learning about how technology shapes our everyday lives.
            </p>
          )}
                <footer>
                    <button 
                    onClick={handleToggle} className='inline-flex text-white border-2 py-2 px-4 sm:px-6 focus:outline-none
                    hover:bg-[#801b9c] hover:shadow-[#0_0_40px_rgba(128,0,128,0.7)] rounded-full text sm:text-lg'>{showMore ? 'Show Less' : 'Know More'}</button>
                </footer>

            </article>
        </div>
    </section>
  )
}
export default About;