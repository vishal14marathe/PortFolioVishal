import { motion } from 'framer-motion'
import ThreeScene from './ThreeScene'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Shrish</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
            Product Manager & Fintech Specialist
          </h2>
          <p className="text-lg mb-8 max-w-lg">
            Creating innovative solutions at the intersection of technology and finance.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/shrishprakashgiri234"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="/assets/MBA_ShrishhPGirri_ProductManagement.pdf"
              download
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center"
            >
              <FaFileDownload className="mr-2" /> Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2"
        >
          <ThreeScene />
        </motion.div>
      </div>
    </section>
  )
}