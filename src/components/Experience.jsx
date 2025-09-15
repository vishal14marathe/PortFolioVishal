import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Web Developer Intern",
    company: "ExtraByte Learning",
    duration: "Sep 2024 - Oct 2024",
    location: "Remote",
    responsibilities: [
      "Built and optimized responsive websites using modern web technologies",
      "Improved user experience through implementation of design principles",
      "Collaborated with development team to integrate back-end functionality",
      "Enhanced site performance and learned new tools and frameworks"
    ]
  },
  {
    role: " React JS Developer Intern",
    company: "Concerto Software & Systems Private Limited ",
    duration: "May 2025 – Sept 2025 ",
    location: "Office",
    responsibilities: [
      "Worked on a real-time project at Concerto Soft Company using React.js",
      "Developed responsive UI components and ensured smooth user interactions",
      "Collaborated with the team to integrate APIs and optimize overall performance",
      "Gained practical exposure to industry standards and improved problem-solving skills in frontend development"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <p className="text-gray-500 dark:text-gray-400">{exp.duration}</p>
                    <p className="text-gray-500 dark:text-gray-400">{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* QSpider Internship (if you want to include) */}
            {/* <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">Upcoming Internship</h3>
                  <p className="text-gray-600 dark:text-gray-300">QSpider</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <p className="text-gray-500 dark:text-gray-400">Nov 2024 - Jan 2025</p>
                  <p className="text-gray-500 dark:text-gray-400">3-month program</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                  <span>3-month intensive training program in software development</span>
                </li>
              </ul>
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}