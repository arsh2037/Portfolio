import React from 'react';

function Portfolio() {
  const experiences = ['Experience 1', 'Experience 2', 'Experience 3'];
  const projects = ['Project 1', 'Project 2', 'Project 3'];
// small change to restart the build
// small change to restart the build
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-400 to-light-blue-500 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
        <div className="relative max-w-4xl mx-auto flex flex-col sm:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full sm:w-1/2 p-8">
            <h1 className="text-4xl font-bold text-cyan-600">Arsh Hasan</h1>
            <h2 className="text-2xl text-cyan-600">Software Engineer</h2>
            <p className="mt-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              Hi, I specialize in building high-quality web applications and have worked with a variety of technologies and frameworks.
            </p>
            <p>Check out my blog for the latest insights and tutorials.</p>
          </div>
          <div className="w-full sm:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-cyan-600">Experience</h3>
            <div className="mt-4">
              {experiences.map((experience, index) => (
                <p key={index} className="text-gray-700 hover:text-cyan-600 transition duration-300">
                  {experience}
                </p>
              ))}
            </div>
            <h3 className="text-2xl font-bold mt-4 text-cyan-600">Projects</h3>
            <div className="mt-4">
              {projects.map((project, index) => (
                <p key={index} className="text-gray-700 hover:text-cyan-600 transition duration-300">
                  {project}
                </p>
              ))}
              
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7 text-center text-white">
        <p>
          Want to get in touch? Reach out on <a href="#" className="text-cyan-600 hover:text-cyan-700"> LinkedIn </a> or <a href="#" className="text-cyan-600 hover:text-cyan-700"> send me an email. </a>
        </p>
      </div>
    </div>
  );
}

export default Portfolio;
