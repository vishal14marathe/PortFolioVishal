import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Product Management Trainee",
    company: "Concerto Systems & Software",
    duration: "May 2025 - Present",
    location: "Navi Mumbai",
    responsibilities: [
      "Supporting the product team in the design and enhancement of payment gateway solutions",
      "Conducting market research, competitor analysis, and user feedback evaluations",
      "Assisting in documentation, feature specification, and sprint backlog grooming",
      "Learning end-to-end fintech product development processes"
    ]
  },
  {
    role: "Android Development Intern",
    company: "Concerto Systems & Software",
    duration: "Jan 2024 - Apr 2024",
    location: "Navi Mumbai",
    responsibilities: [
      "Developed and optimized Android app features with improved UI responsiveness",
      "Participated in Agile sprints, assisting with code reviews and bug fixes",
      "Gained experience in mobile app lifecycle management and backend integrations"
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}