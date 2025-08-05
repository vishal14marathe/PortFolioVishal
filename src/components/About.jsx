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
              Aspiring Product Manager with a strong foundation in fintech, data analysis, and software development. 
              Experienced in Android development, payment gateway systems, and user-focused product design.
            </p>
            <p className="text-lg mb-6">
              Passionate about solving real-world problems through agile methodologies, digital innovation, 
              and cross-functional collaboration. Currently gaining hands-on experience in product lifecycle 
              management and fintech platforms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Strengths</h3>
                <ul className="space-y-2">
                  {['Leadership', 'Innovative Product Thinking', 'User-Centric Design', 
                    'Team Collaboration', 'Problem Solving', 'Agile Execution', 
                    'Strategic Roadmapping'].map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Hobbies & Interests</h3>
                <ul className="space-y-2">
                  {['Running', 'Cycling', 'Drawing', 'Volunteering for Social Causes'].map((hobby, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {hobby}
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