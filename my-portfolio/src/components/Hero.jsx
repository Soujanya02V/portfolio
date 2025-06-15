import React from 'react'
import Navbar from './Navbar'



const Hero = () => {
    return (
        

           


            <div className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center bg-gray-950">


                <div className="h-[550px] w-[450px] bg-gradient-to-r from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] rotate-45 absolute z-0 right-2 top-28 rounded-3xl">
                </div>

             <Navbar />
             <main id="home" className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-14 md:mt-0 z-10'>
                <section className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative'
                data-aos = "fade-up"
                data-aos-delay="500">
                    <div className='absolute -z-10 w-60 h-60 bg-[#cd3cf5] rounded-full blur-3xl opacity-70 -top-5 -left-12 shadow-[0_0_80px_40px_rgba(205,60,245,0.5)]'></div>
                    <header>
                        <h1 className='text-4xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
                            Soujanya Maharudra
                        </h1>
                        <h2 className='text-xl sm:text-4xl md:text-2xl font-bold  text-[#3e0f4a] md:text-[#c744ec] mb-2'>
                            FullStack Developer
                        </h2>
                    </header>
                    <p className='text-base sm:text-lg md:text-lg text-gray-200 mb-6'>
                        Aspiring Full Stack Developer with a focus on MERN Stack. Skilled in building responsive and scalable 
web apps. Passionate about clean code and user-centric design. Seeking to contribute and grow in a 
dynamic tech environment. 
                    </p>
                    <div  className='flex items-center space-x-4 mb-6'>
                         <a href="https://www.linkedin.com/in/soujanya-maharudra-896920291/ ">
                            <img src="/assets/linkedin.png" alt="linkedin" className='w-11 h-11 hover:scale-110 transition-transform duration-200'/>
                        </a>
                        <a href="https://github.com/Soujanya02V">
                            <img src="/assets/github.png" alt="github" className='w-11 h-11 hover:scale-110 transition-transform duration-200'/>
                        </a>
                       
                        <a href="https://www.instagram.com/sow_zanya/">
                            <img src="/assets/insta.png" alt="instagram" className='w-14 h-14 hover:scale-110 transition-transform duration-200'/>
                        </a>
                        <a href="mailto:soujanyabailawad@gmail.com">
                            <img src="/assets/email.png" alt="email" className='w-11 h-11 hover:scale-110 transition-transform duration-200'/>
                        </a>
                        
                    </div>
                    <a href="/assets/Soujanya_Maharudra_CV.pdf" download>
                        <button className='inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:bg-[#801b9c] hover:shadow-[0_0_40px_rgba(128,0,128,0.7)] rounded-full text-lg'>
                            Download CV
                        </button>
                    </a>
                    
                </section>

                <figure data-aos="fade-up" data-aos-delay="500" className='flex-1 flex justify-center md:justify-end mt-0'>
                    <img src="/assets/imghero.png" alt="hero image" className='h-[300px] sm:h-[400px] md:h-[485px] e-[250px] sm:w-[480px] object-cover rounded-lg'/>
                </figure>
             </main>
            </div>

             
        
    )
}

export default Hero
