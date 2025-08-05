import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: "Driver Drowsiness Detection System",
    description: "Developed a real-time driver drowsiness detection system using Machine Learning and Image Processing to enhance road safety by analyzing facial features.",
    technologies: ["Python", "OpenCV", "Machine Learning", "Deep Learning"],
    year: "2023-2024"
  },
  {
    title: "Bus Locator Application",
    description: "Innovated a real-time bus tracking system using GPS and GPRS technology to improve public transport efficiency and reduce passenger wait times.",
    technologies: ["Java", "Android SDK", "MySQL", "Apache Tomcat"],
    year: "2020-2021"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
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
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}