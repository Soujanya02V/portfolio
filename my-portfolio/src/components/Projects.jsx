import React from "react";

const projects = [
  {
    title: "MERN Blog Application",
    description: "middleware, jsonwebtoken, bcryptjs usage to register, login and add blogs",
    image: "/assets/blogs.png",
    link: "https://github.com/Soujanya02V/mern-blog",
  },
  {
    title: "REACT Form Application",
    description: "Simple form submission application in React + VITE.",
    image: "/assets/connect.png",
    link: "https://github.com/Soujanya02V/react_level_2",
  },
  {
    title: "REACT Contact Directory",
    description: "LocalStorage usage to store the contacts and display them on screen",
    image: "/assets/contact.png",
    link: "https://github.com/Soujanya02V/react_level_4",
  },
  {
    title: "REACT Dice Game",
    description: "Simple Dice Game app in React to build logic of calculating score",
    image: "/assets/dice.png",
    link: "https://github.com/Soujanya02V/react_level_3",
  },
  {
    title: "MERN Food Delivery Application",
    description: "On quantity amount calculation and real-time updating cart feature with user login",
    image: "/assets/food.png",
    link: "https://github.com/Soujanya02V/mern",
  },
  {
    title: "Node URL Shortener App",
    description: "Complete backend project to shorten the entered URL using API",
    image: "/assets/url.png",
    link: "https://github.com/Soujanya02V/backend_project_1",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0f0f1b] text-white py-16 px-6"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          My <span className="text-purple-400">Projects</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          "Each project reflects my journey of continuous learning and building with purpose."
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#1a1a2e] rounded-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-[0_0_25px_rgba(173,84,239,0.7)] duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-purple-400 hover:text-white transition"
                  >
                    Visit Github Repo
                  </a>
                </div>
              </div>
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Apart from these featured works, I’ve also built several small-scale projects to explore new technologies, practice problem-solving, and refine my skills. Feel free to check out my GitHub for more!
          </p>
          <a
            href="https://github.com/Soujanya02V"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-md bg-purple-600 hover:bg-purple-700 transition text-white font-medium"
          >
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
//with on hover effect
