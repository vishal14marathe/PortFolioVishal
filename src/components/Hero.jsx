import { motion } from 'framer-motion'
import ThreeScene from './ThreeScene'
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa'

export default function Hero() {
  // Method 1: Using public folder (recommended)
  const resumePath = 'https://github.com/vishal14marathe/my-pdf-files/blob/194ace4bfce8dbf1fadfe083dfd178bdb85356d1/MBA_ShrishhPGirri_ProductManagement.pdf'

  // Method 2: Using import (alternative)
  // import resumePDF from '../assets/ShrishGiri_Resume.pdf'
  // Then use href={resumePDF}

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center py-20 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 dark:text-white">
            Hi, I'm <span className="text-blue-500 dark:text-blue-400">Shrish</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
            Product Manager & Fintech Specialist
          </h2>

          <p className="text-lg mb-8 max-w-lg text-gray-700 dark:text-gray-300">
            Creating innovative solutions at the intersection of technology and finance.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </motion.a> */}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/shrishprakashgiri234"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={resumePath}
              download="ShrishGiri_Resume.pdf"
              className="bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white px-6 py-3 rounded-lg flex items-center"
            >
              <FaFileDownload className="mr-2" /> Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column - 3D Scene */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 w-full h-64 md:h-96"
        >
          <ThreeScene />
        </motion.div>
      </div>
    </section>
  )
}