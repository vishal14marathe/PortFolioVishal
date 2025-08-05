import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-6">
              Computer Science Engineering student at Padmabhooshan Vastraodada Patil Institute of Technology
              with hands-on experience in full-stack development and a growing interest in product management.
              Skilled in MERN stack, Java, and modern web technologies with multiple successful projects deployed.
            </p>
            <p className="text-lg mb-6">
              Passionate about learning new technologies and solving complex problems through innovative solutions.
              Recently completed internships in web development while exploring product strategy and fintech applications.
              Strong foundation in both technical implementation and user experience design.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Expertise</h3>
                <ul className="space-y-2">
                  {['Full-Stack Development (MERN)', 'Java Programming',
                    'API Integration', 'Database Management (SQL/MongoDB)',
                    'Responsive Web Design', 'Problem Solving (DSA)',
                  ].map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Achievements & Interests</h3>
                <ul className="space-y-2">
                  {['Flipkart Grid 6.0 Participant', 'Certified in Java Programming',
                    'MERN Stack Certification', 'Learning New Technologies',
                    'Problem Solving'].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}