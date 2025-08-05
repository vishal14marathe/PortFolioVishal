import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "Weather Forecast Website",
    description: "Developed a web application that retrieves live weather data using APIs. My first web project that helped me understand API integration and frontend development.",
    technologies: ["HTML", "CSS", "JavaScript", "Weather API"],
    year: "2023",
    githubLink: "https://github.com/vishal14marathe/WeatherApp",
    liveLink: "https://vishal14marathe.github.io/WeatherApp/" // Add actual live link if available
  },
  {
    title: "Video Conference Website",
    description: "Built a full-featured video conferencing platform with real-time video calls, screen sharing, and chat functionality using MERN stack.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "WebRTC"],
    year: "2024",
    githubLink: "http://github.com/vishal14marathe/meeting",
    liveLink: "#" // Add actual live link if available
  },
  {
    title: "Wanderlust - Property Hosting",
    description: "Created a property booking platform with user authentication, dynamic search, and responsive design. Successfully deployed the application.",
    technologies: ["MERN Stack", "Tailwind CSS", "JWT Auth", "MongoDB"],
    year: "2024",
    githubLink: "https://github.com/vishal14marathe/Wonderlust",
    liveLink: "#" // Add actual live link if available
  },
  {
    title: "LinkedIn Clone",
    description: "Developed a LinkedIn-inspired professional networking platform with user profiles, connections, and post functionality.",
    technologies: ["React", "Firebase", "Redux", "Tailwind CSS"],
    year: "2024",
    githubLink: "https://github.com/vishal14marathe/linkedin-clone",
    liveLink: "#" // Add actual live link if available
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-gray-200 dark:bg-gray-600 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <FaGithub className="mr-1" /> Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-green-600 dark:text-green-400 hover:underline"
                      >
                        <FaExternalLinkAlt className="mr-1" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}