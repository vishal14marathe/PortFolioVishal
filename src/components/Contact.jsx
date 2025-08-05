import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaEnvelope className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:vishalmarathe2024@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                        vishalmarathe2024@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhone className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a href="tel:+919112625608" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors">
                        +91 9112625608
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaLinkedin className="text-blue-500 mt-1 mr-3" />
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <a
                        href="https://www.linkedin.com/in/vishal-marathe-50763722b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors"
                      >
                        linkedin.com/in/vishal-marathe-50763722b/
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}